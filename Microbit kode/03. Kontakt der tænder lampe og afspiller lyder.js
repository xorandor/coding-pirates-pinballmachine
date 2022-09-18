let LampeTaendt = 0
input.onPinPressed(TouchPin.P0, function () {
    serial.writeLine("POINT=10#")
    serial.writeLine("LYD=C#")
    pins.digitalWritePin(DigitalPin.P16, 1)
    LampeTaendt = 1
})
basic.forever(function () {
    if (LampeTaendt == 1) {
        control.waitMicros(1000000)
        pins.digitalWritePin(DigitalPin.P16, 0)
        LampeTaendt = 0
    }
})
