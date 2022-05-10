function crosswalk () {
    if (indicator == 0) {
        basic.showLeds(`
            . . # . #
            . # # # .
            # . # . .
            . . # # .
            . # . # .
            `)
    }
}
function red2 () {
    for (let index = 0; index < 11; index++) {
        music.playMelody("F - F - F - F - ", 120)
    }
}
input.onButtonPressed(Button.A, function () {
	
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
}
function Yellow () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
function yellow_2 () {
    for (let index = 0; index < 14; index++) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    }
}
function green2 () {
    for (let index = 0; index < 18; index++) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 120)
    }
}
input.onButtonPressed(Button.B, function () {
    RED()
    red2()
    basic.pause(100)
    OFF()
    basic.pause(500)
    Yellow()
    yellow_2()
    basic.pause(100)
    OFF()
    basic.pause(500)
    Green()
    green2()
    basic.pause(100)
    OFF()
    basic.pause(500)
    Yellow()
    yellow_2()
    basic.pause(7000)
    OFF()
    basic.pause(500)
})
function OFF () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function Green () {
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
}
let range: neopixel.Strip = null
let indicator = 0
let strip: neopixel.Strip = null
radio.setGroup(40)
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(100)
indicator = 0
basic.forever(function () {
    RED()
    basic.pause(45000)
    OFF()
    basic.pause(500)
    Yellow()
    basic.pause(7000)
    OFF()
    basic.pause(500)
    Green()
    basic.pause(70000)
    OFF()
    basic.pause(500)
    Yellow()
    basic.pause(7000)
    OFF()
    basic.pause(500)
})
