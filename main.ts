/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus
 * Created on: Sep 2025
 * This program turns an LED on and off
*/

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    // This turns on a LED
    basic.showIcon(IconNames.Yes)
    pins.digitalWritePin(DigitalPin.P16, 1)
})

input.onButtonPressed(Button.B, function () {
    // This turns off a LED
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P16, 0)
})
