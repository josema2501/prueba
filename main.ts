input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # #
        . . # # .
        . . # # .
        . . . . .
        `)
    basic.showNumber(randint(1, 9))
})
basic.forever(function () {
	
})
