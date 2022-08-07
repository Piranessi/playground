#include <Arduino.h>
#define SHUTTERS_TIME 10000
#define R_DOWN_PIN 19
#define R_UP_PIN 23

/**
 *  1 - init
 *  2 - setup
 *  3 - normal
 *  4 - error
 */
void taskShutters(void * parameter);