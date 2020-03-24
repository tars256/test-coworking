let Blauanteil = 0
let Grünanteil = 0
let Rotanteil = 0
let strip = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)
strip.setBrightness(60)
for (let Index = 0; Index <= 255; Index++) {
    Rotanteil = Math.randomRange(0, 255)
    Grünanteil = Math.randomRange(0, 255)
    Blauanteil = Math.randomRange(0, 255)
    strip.setPixelColor(Index, neopixel.rgb(Rotanteil, Grünanteil, Blauanteil))
    strip.show()
    basic.pause(20)
    basic.showLeds(`
        . . . # #
        # . # . .
        . . . . .
        . # . . .
        . . . . .
        `)
}
basic.pause(5000)
strip.clearMatrix()
