let minValue: number = 1
let maxValue: number = 99

let minSelectValue: number = minValue
let maxSelectValue: number = maxValue 


let value: number = 50

basic.forever(function() {
    if (minSelectValue)





    whaleysans.showNumber(value)
    basic.pause(20)
})

input.onButtonPressed(Button.A, function() {
    maxSelectValue = value
    value = randint(minSelectValue, maxSelectValue)
})

input.onButtonPressed(Button.B, function () {
    minSelectValue = value
    value = randint(minSelectValue, maxSelectValue)
})

input.onButtonPressed(Button.AB, function () {
    minSelectValue = minValue
    maxSelectValue = maxValue
    value = 50
})
