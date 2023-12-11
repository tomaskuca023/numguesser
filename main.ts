//po prvním použití potřeba AB držet po dobu sekundy pro přepnutí "selection" na false ???


let aPressed: boolean
let bPressed: boolean
let aWasPressed: boolean
let bWasPressed: boolean
let aTimer: number
let bTimer: number
let minHoldTime: number = 500

let minValue: number = 1
let maxValue: number = 99
let selection: boolean = true

let maxSelectValue: number = maxValue

let minPickValue: number = minValue
let maxPickValue: number = maxSelectValue

let value: number

basic.forever(function() {
//input detection
    if (selection) {

        aPressed = input.buttonIsPressed(Button.A)
        bPressed = input.buttonIsPressed(Button.B)

        if (!aPressed) {
            aTimer = control.millis()
        }

        if (!bPressed) {
            bTimer = control.millis()
        }


//selection screen
        if ((aPressed) && (aWasPressed) && (control.millis() - aTimer > minHoldTime)) {
            maxSelectValue -= 1
        }
        if ((aPressed) && (!aWasPressed)) {
            maxSelectValue -= 1
        }

        if ((bPressed) && (bWasPressed) && (control.millis() - bTimer > minHoldTime)) {
            maxSelectValue += 1
        }
        if ((bPressed) && (!bWasPressed)) {
            maxSelectValue += 1
        }

        if (maxSelectValue > maxValue) {
            maxSelectValue = minValue
        }
        if (maxSelectValue < minValue) {
            maxSelectValue = maxValue
        }

        aWasPressed = aPressed
        bWasPressed = bPressed

        if (input.buttonIsPressed(Button.AB)) {
            value = Math.round(maxSelectValue / 2)
            maxPickValue = maxSelectValue
            selection = false
            basic.pause (100)
        }
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
            selection = true
            basic.pause (100)
        })
    }

    if (selection) {
        whaleysans.showNumber(maxSelectValue)
    }


    if (!selection) {
        whaleysans.showNumber(value)
    }

    basic.pause(20)

})
