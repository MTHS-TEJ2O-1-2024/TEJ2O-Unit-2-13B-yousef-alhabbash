/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Yousef
 * Created on: Oct 2024
 * This program counts down from 4 to 0
*/

//setup
let neopixelStrip: neopixel.Strip = null
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.show()

//countdown
input.onButtonPressed(Button.A, function () {
    let count = 4
    while (count >= 0) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    
        if (count > 0) {
            neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue));
        }
        if (count > 1) {
            neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple));
        }
        if (count > 2) {
            neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple));
        }
        if (count > 3) {
            neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue));
        }
        neopixelStrip.show()
        basic.pause(1000) 
        basic.showNumber(count)
        count--
    }
})
basic.showIcon(IconNames.Happy)
