control.inBackground(function onIn_background() {
    let hrathudbu: boolean;
    if (hrathudbu) {
        music.playTone(Note.E, music.beat(12))
        hrathudbu = false
    }
    
})
let [Player1, Player1time, zmacknuto, Player2, Player2time, hrathudbu, delka] = [false, 0, false, false, 0, false, 0]
restartovani()
basic.forever(function on_forever() {
    
    console.logValue("x", delka)
    let pin1pressed = input.pinIsPressed(TouchPin.P1)
    let pin2pressed = input.pinIsPressed(TouchPin.P2)
    console.logValue("pin1", pin1pressed)
    // console.log_value("ukazano", ukazano)
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
        if (!zmacknuto) {
            hrathudbu = true
            basic.showIcon(IconNames.Diamond, 0)
        }
        
        if (zmacknuto) {
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
            
            restartovani()
        }
        
    }
    
})
function restartovani() {
    
    basic.clearScreen()
    Player2 = false
    Player1time = 0
    Player1 = false
    Player2time = 0
    pins.touchSetMode(TouchTarget.P1, TouchTargetMode.Capacitive)
    pins.touchSetMode(TouchTarget.P2, TouchTargetMode.Capacitive)
    zmacknuto = false
    delka = randint(3, 10) * 1000 + control.millis()
    hrathudbu = false
}

