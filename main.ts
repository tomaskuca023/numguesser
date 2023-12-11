let minValue: number = 1
let maxValue: number = 99
let selection: boolean = true

let maxSelectValue: number = maxValue

let minPickValue: number = minValue
let maxPickValue: number = maxSelectValue




let value: number = 50

basic.forever(function() {

    if (selection) {
        whaleysans.showNumber(maxSelectValue)
    }


    if (!selection) {
        whaleysans.showNumber(value)
    }

    basic.pause(20)
})

//selection screen
if (selection) {
    input.onButtonPressed(Button.A, function() {
        maxSelectValue -= 1
    })

    input.onButtonPressed(Button.B, function () {
        maxSelectValue += 1
    })
    input.onButtonPressed(Button.AB, function () {
        selection = false
    })
}



//game
if (!selection) {
    input.onButtonPressed(Button.A, function() {
      maxPickValue = value
       value = Math.round(randint(minPickValue, maxPickValue))
    })

    input.onButtonPressed(Button.B, function () {
        minPickValue = value
        value = Math.round(randint(minPickValue, maxPickValue))
    })

    input.onButtonPressed(Button.AB, function () {
       minPickValue = minValue
       maxPickValue = maxSelectValue
       value = 50
       selection = true
    })
}
