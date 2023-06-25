let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 500), music.PlaybackMode.UntilDone)
    pins.servoWritePin(AnalogPin.P0, 180)
})
