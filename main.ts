input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        num += -1
        basic.showNumber(num)
        basic.pause(1000)
    }
    basic.pause(randint(500, 2000))
    basic.showNumber(0)
    temps = control.millis()
    if (input.pinIsPressed(TouchPin.P0)) {
        temps_2 = control.millis()
        basic.showNumber(temps_2 - temps)
    }
})
let temps_2 = 0
let temps = 0
let num = 0
num = 3
basic.showNumber(num)
basic.forever(function () {
	
})
