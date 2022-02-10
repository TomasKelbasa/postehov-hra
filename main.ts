let Player2 = false
let Player1time = 0
let Player1 = false
let Player2time = 0
pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
let zmacknuto = false
let delka = randint(3, 10) * 1000
let hrathudbu = false
let ukazano = false
basic.forever(function on_forever() {
    console.logValue("x", delka)
    
    let pin1pressed = input.pinIsPressed(TouchPin.P1)
    let pin2pressed = input.pinIsPressed(TouchPin.P2)
    console.logValue("pin1", pin1pressed)
    if (pin1pressed) {
        if (!zmacknuto) {
            Player1 = true
            Player1time = control.millis()
        }
        
    }
    
    if (pin2pressed) {
        if (!zmacknuto) {
            Player2 = true
            Player2time = control.millis()
        }
        
    }
    
    if (Player1 || Player2) {
        if (control.millis() >= delka) {
            zmacknuto = true
        }
        
    }
    
    if (control.millis() >= delka) {
        if (!zmacknuto && !ukazano) {
            control.inBackground(function onIn_background() {
                if (hrathudbu) {
                    music.playTone(Note.E, music.beat(12))
                }
                
            })
            hrathudbu = true
            ukazano = false
            basic.showIcon(IconNames.Diamond)
        }
        
        if (zmacknuto) {
            control.inBackground(function void_background() {
                
            })
            hrathudbu = false
            if (Player1 && Player2) {
                if (Player1time <= delka && Player2time <= delka) {
                    basic.showString("C")
                } else {
                    basic.showString("R")
                }
                
            } else if (Player1) {
                if (Player1time < delka) {
                    basic.showString("B")
                } else {
                    basic.showNumber(1)
                }
                
            } else if (Player2time < delka) {
                basic.showString("A")
            } else {
                basic.showNumber(2)
            }
            
            basic.pause(1000)
            control.reset()
        }
        
    }
    
})
