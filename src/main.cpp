#include "tasks/taskBlinker/taskBlinker.h"
#include "tasks/taskLightSensor/taskLightSensor.h"
#include "tasks/taskMqttHandler/taskMqttHandler.h"
#include "tasks/taskShutters/taskShutters.h"
#include "tasks/taskWifiHandler/taskWiFiHandler.h"
#include "customTypes.h"


shuttersStruct dataForShutters;


void setup()
{

  Serial.begin(9600);
  Serial.println("Setting state to INIT");

  xTaskCreate(
    taskBlinker,
    "taskBlinker",
    5000,
    (void*)&dataForShutters.blinkAmount,
    10,
    NULL
  );
  xTaskCreate(
    taskLightSensor,
    "taskLightSensor",
    5000,
    (void*)&dataForShutters.lightLux,
    4,
    NULL
  );
  xTaskCreate(
    taskMqttHandler,
    "taskMqttHandler",
    10000,
    (void*)&dataForShutters,
    3,
    NULL
  );
  xTaskCreate(
    taskShutters,
    "taskShutters",
    5000,
    (void*)&dataForShutters,
    2,
    NULL
  );
  xTaskCreate(
    taskWiFiHandler,
    "taskWiFiHandler",
    5000,
    (void*)&dataForShutters,
    1,
    NULL
  );
  

  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(R_DOWN_PIN, OUTPUT);
  pinMode(R_UP_PIN, OUTPUT);
  dataForShutters.state = PossibleStates::INIT;
}


void loop()
{
  switch (dataForShutters.state)
  {
    case PossibleStates::INIT:
      dataForShutters.blinkAmount = 1;
      //jezeli nie ma wifi, state setup?
      break;
    case PossibleStates::SETUP:
      dataForShutters.blinkAmount = 2;
      break;
    case PossibleStates::NORMAL:
      dataForShutters.blinkAmount = 3;
      break;
    default:
      dataForShutters.blinkAmount = 4;
      Serial.print("Default state reached");
      ESP.restart();
      break;
  }
}

// shutters functionality
// controlling from phone func
// reset functionality
// set day or night in setup, the same for shuttes

  // in setup -> commented
  // Serial.println(ESP.getFreeHeap());
  // Serial.println(ESP.getSketchSize());
  // Serial.println(ESP.getFreeSketchSpace());
  // Serial.println(ESP.getChipCores());
  // Serial.println(ESP.getFlashChipSize());
  // Serial.println("");
  /*
        PubSub.publish(publishTopic, { msg: "lfe_1"});
    } else {
      PubSub.publish(publishTopic, { msg: "lfe_0"});
      */
// test