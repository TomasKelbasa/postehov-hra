pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)

Player1 = False
Player1time = 0
Player2 = False
Player2time = 0
nezmacknuto = True

def on_forever():
    if(input.pin_is_pressed(TouchPin.P1)):
        if(nezmacknuto):
                Player1 = True
                Player1time = control.millis()
                basic.show_number(1)
                nezmacknuto = False
                console.log_value("x", nezmacknuto)
    if(input.pin_is_pressed(TouchPin.P2)):
        if(nezmacknuto):
                Player2 = True
                Player2time = control.millis()
                nezmacknuto = False
                basic.show_number(2)  
basic.forever(on_forever)

def on_pin_pressed_p1():
    if(not zmacknuto):
        Player1 = True
        Player1time = control.millis()
        zmacknuto = True
        basic.show_number(1)
        console.log_value("x", zmacknuto)
def on_pin_pressed_p2():
    if(not zmacknuto):
        Player2 = True
        Player2time = control.millis()
        zmacknuto = True
        basic.show_number(2)