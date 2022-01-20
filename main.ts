let Player2 = false
let Player1time = 0
let Player1 = false
let Player2time = 0
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let nezmacknuto = true
let delka = randint(1, 5) * 1000
let hrathudbu = false
let ukazano = false
basic.forever(function on_forever() {
    console.logValue("x", delka)
    
    let pin1pressed = input.pinIsPressed(TouchPin.P1)
    let pin2pressed = input.pinIsPressed(TouchPin.P2)
    console.logValue("pin1", pin1pressed)
    if (pin1pressed) {
        if (nezmacknuto) {
            Player1 = true
            Player1time = control.millis()
            // basic.show_number(1)
            nezmacknuto = false
        }
        
    }
    
    if (pin2pressed) {
        if (nezmacknuto) {
            Player2 = true
            Player2time = control.millis()
            // basic.show_number(2)
            nezmacknuto = false
        }
        
    }
    
    if (control.millis() >= delka) {
        if (nezmacknuto && !ukazano) {
            basic.showIcon(IconNames.Diamond)
            ukazano = false
        }
        
        // hrathudbu = True
        if (!nezmacknuto) {
            basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        }
        
    }
    
})
// control.in_background(onIn_background)
function onIn_background() {
    
    if (hrathudbu) {
        basic.showNumber(9)
    }
    
}

