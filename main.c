#include <Thermocouple.h>
#include <MAX6675_Thermocouple.h>
#include <SmoothThermocouple.h>
#include "BluetoothSerial.h"
#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif
#define SMOOTHING_FACTOR 1
#define ERROR_LIMIT 15
#define TEMPERATURE_SENSORS_SKIP_IN_MS 1

BluetoothSerial SerialBT;
Thermocouple* thermocouple = NULL;
String msg_bt = "";
int temperature_bottom_current = -1;
int temperature_bottom_current_prev = -1;
int histeresis_coeff = 50;
int temperature_bottom_target = 50;
int error_count = 0;

// thermocouple hardware status bottom
int POWER_SOURCE_PIN = 23; // Pin 10
int termocouple_bottom_SO = 13;
int termocouple_bottom_CS = 12;
int termocouple_bottom_SCK = 14;
// thermocouple hardware status bottom END

int cnt_temp_sensor = TEMPERATURE_SENSORS_SKIP_IN_MS;
int very_careful_stage_dif_degrees = 15;
int very_careful_heating_time = 6;
int careful_heating_time = 10;
int temp_dif_bot_target_current = 0;

long unsigned int time_from_system_up_in_seconds = 0;
long unsigned int stop_time_from_system_up_in_seconds = time_from_system_up_in_seconds;

// timer
volatile int interruptCounter;
hw_timer_t* timer = NULL;
portMUX_TYPE timerMux = portMUX_INITIALIZER_UNLOCKED;
// timer

void IRAM_ATTR onTimer()
{
    portENTER_CRITICAL_ISR(&timerMux);
    interruptCounter++;
    portEXIT_CRITICAL_ISR(&timerMux);
}

void setup_timer()
{
    timer = timerBegin(0, 80, true);
    timerAttachInterrupt(timer, &onTimer, true);
    timerAlarmWrite(timer, 1000000, true);
    timerAlarmEnable(timer);
}

void task_calculate_time()
{
    if (interruptCounter > 0)
    {
        portENTER_CRITICAL(&timerMux);
        interruptCounter--;
        portEXIT_CRITICAL(&timerMux);
        ++time_from_system_up_in_seconds;
    }
}

void errorOccured()
{
    ++error_count;
    SerialBT.println("Error has been occurred, current error counter = " + error_count);
    if (error_count >= ERROR_LIMIT)
    {
        SerialBT.println("Error limit has been reached, ESP will be restarted");
        delay(5000);
        ESP.restart();
    }
}

void setup()
{
    Serial.begin(115200);
    setup_timer();
    thermocouple = new SmoothThermocouple(new MAX6675_Thermocouple(termocouple_bottom_SCK,
                                              termocouple_bottom_CS, termocouple_bottom_SO),
        SMOOTHING_FACTOR);
    SerialBT.begin("SzzczZ");
    pinMode(POWER_SOURCE_PIN, OUTPUT);
    digitalWrite(POWER_SOURCE_PIN, LOW);
    delay(2000);
}

String time_sec_tohhmmss(long unsigned int sec)
{
    return (String(sec / 3600) + ":" + String((sec - (3600 * (sec / 3600))) / 60) + ":"
        + String((sec - (3600 * (sec / 3600)) - (((sec - (3600 * (sec / 3600))) / 60) * 60))));
}

void task_BT_Handler()
{
    // receive
    if (SerialBT.available())
    {
        while (SerialBT.available())
        {
            msg_bt += (char)SerialBT.read();
        }
        if (msg_bt.substring(0, 1) == "1")
        {
            temperature_bottom_target = msg_bt.substring(1, 4).toInt();
        }
        else
        {
            SerialBT.println("Wrong header code, msg will be not processed.");
        }
        msg_bt = ""; // after execution of commands inside msg from bluetooth, reset variable
    }

    // send
    SerialBT.println("Temp bottom: " + String(temperature_bottom_current));
    SerialBT.println("Temperature bottom target: " + String(temperature_bottom_target));
    SerialBT.println(time_sec_tohhmmss(time_from_system_up_in_seconds));
}

void sensor_temperature_bottom()
{
    temperature_bottom_current_prev = temperature_bottom_current;
    temperature_bottom_current = (int)thermocouple->readCelsius();

//    // protection against random data on thermocouple on gpio
//    if (((temperature_bottom_current_prev > temperature_bottom_current)
//            && ((temperature_bottom_current_prev - temperature_bottom_current) > histeresis_coeff))
//        || ((temperature_bottom_current_prev < temperature_bottom_current)
//               && ((temperature_bottom_current - temperature_bottom_current_prev)
//                      > histeresis_coeff)))
//    {
//        temperature_bottom_current = temperature_bottom_current_prev;
//        errorOccured();
//    }
}
int time_from_last_stop()
{
    return (int)(time_from_system_up_in_seconds - stop_time_from_system_up_in_seconds);
}

unsigned int time_left_heating(int how_long_heat)
{
    return (unsigned int)(how_long_heat
        - (time_from_system_up_in_seconds - stop_time_from_system_up_in_seconds));
}

void heating_handler()
{
    sensor_temperature_bottom();
    temp_dif_bot_target_current = temperature_bottom_target - temperature_bottom_current;

    // temperature not going to rise anymore -> getTime when this happened
    if (temperature_bottom_current < temperature_bottom_current_prev)
    {
        stop_time_from_system_up_in_seconds = time_from_system_up_in_seconds;
    }

     /*
     * 
     * ^[temperature]
     * |
     * |        xxxxxx       xx
     * |       x      xx    x  xx     x     x         x
     * |------x---------x--x-----x---x-x-xxx-xxx-xxxxx-xxxxxxxxxx(temperature target)
     * |     x           xx       x x   x       x
     * |    x                      x
     * |   x  1         2  3     4   5 6 
     * |  x
     * | x
     * |x
     * |_________________________________________________________> [t]
     * 
     */


    if ((temp_dif_bot_target_current > very_careful_stage_dif_degrees)
        && (time_from_last_stop() < careful_heating_time))
    {
        digitalWrite(POWER_SOURCE_PIN, HIGH);
        SerialBT.println(
            "hEAT=ON careful for " + (String)time_left_heating(careful_heating_time) + " sec.");
    }
    else if ((temp_dif_bot_target_current > 1) && (time_from_last_stop() < very_careful_heating_time))
        {
            digitalWrite(POWER_SOURCE_PIN, HIGH);
            SerialBT.println("hEAT=ON very careful for "
                + (String)time_left_heating(very_careful_heating_time) + " sec.");
        }
    else
    {
        digitalWrite(POWER_SOURCE_PIN, LOW);
        SerialBT.println("hEAT=OFF");
    }
}

void task_heat(int time_ms)
{
    if (true) // cnt_temp_sensor == time_ms)
    {
        --cnt_temp_sensor;
        heating_handler();
    }
    else if (cnt_temp_sensor == 0) cnt_temp_sensor = TEMPERATURE_SENSORS_SKIP_IN_MS;
    else --cnt_temp_sensor;
}

void BT_print_x_lines(unsigned int amount)
{
    for (int i = 0; i < amount; ++i) SerialBT.println("");
}

void loop()
{
    BT_print_x_lines(40);

    task_calculate_time();

    task_heat(TEMPERATURE_SENSORS_SKIP_IN_MS);

    task_BT_Handler();

    delay(1000);
}