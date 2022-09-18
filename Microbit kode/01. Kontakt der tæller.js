let Antal = 0
input.onPinPressed(TouchPin.P0, function () {
    Antal = Antal + 1
    basic.showString("" + (Antal))
})
