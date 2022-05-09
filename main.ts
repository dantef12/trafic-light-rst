input.onButtonPressed(Button.A, function () {
    if (true) {
    	
    }
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.showString("Don't Walk")
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    for (let index = 0; index < 22; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.rest(music.beat(BeatFraction.Whole))
    }
}
function Yellow () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
}
input.onButtonPressed(Button.B, function () {
	
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
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Yes)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(100)
let indicator = 0
basic.forever(function () {
    RED()
    basic.pause(45000)
    OFF()
    basic.pause(500)
    Yellow()
    basic.pause(15000)
    OFF()
    basic.pause(500)
    Green()
    basic.pause(70000)
    OFF()
    basic.pause(500)
    Yellow()
    basic.pause(15000)
    OFF()
    basic.pause(500)
    RED()
    basic.pause(45000)
    OFF()
    basic.pause(45000)
})
