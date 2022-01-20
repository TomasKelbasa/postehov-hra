pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let Player1 = false
let Player1time = 0
let Player2 = false
let Player2time = 0
let nezmacknuto = true
basic.forever(function on_forever() {
    let Player1: boolean;
    let Player1time: number;
    let nezmacknuto: boolean;
    let Player2: boolean;
    let Player2time: number;
    if (input.pinIsPressed(TouchPin.P1)) {
        if (nezmacknuto) {
            Player1 = true
            Player1time = control.millis()
            basic.showNumber(1)
            nezmacknuto = false
            console.logValue("x", nezmacknuto)
        }
        
    }
    
    if (input.pinIsPressed(TouchPin.P2)) {
        if (nezmacknuto) {
            Player2 = true
            Player2time = control.millis()
            nezmacknuto = false
            basic.showNumber(2)
        }
        
    }
    
})
function on_pin_pressed_p1() {
    let Player1: boolean;
    let Player1time: number;
    let zmacknuto: boolean;
    if (!zmacknuto) {
        Player1 = true
        Player1time = control.millis()
        zmacknuto = true
        basic.showNumber(1)
        console.logValue("x", zmacknuto)
    }
    
}

function on_pin_pressed_p2() {
    let Player2: boolean;
    let Player2time: number;
    let zmacknuto: boolean;
    if (!zmacknuto) {
        Player2 = true
        Player2time = control.millis()
        zmacknuto = true
        basic.showNumber(2)
    }
    
}

