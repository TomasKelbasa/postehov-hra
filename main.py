Player2 = False
Player1time = 0
Player1 = False
Player2time = 0
pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
nezmacknuto = True
delka = randint(1, 5)*1000
hrathudbu = False
ukazano = False

def on_forever():
    console.log_value("x", delka)
    global Player1, Player1time, nezmacknuto, Player2, Player2time, hrathudbu, ukazano
    pin1pressed = input.pin_is_pressed(TouchPin.P1)
    pin2pressed = input.pin_is_pressed(TouchPin.P2)
    console.log_value("pin1", pin1pressed)
    if pin1pressed:
        if nezmacknuto:
            Player1 = True
            Player1time = control.millis()
            #basic.show_number(1)
            nezmacknuto = False
    if pin2pressed:
        if nezmacknuto:
            Player2 = True
            Player2time = control.millis()
            #basic.show_number(2)
            nezmacknuto = False
    if control.millis() >= delka:
        if(nezmacknuto and not ukazano):
            basic.show_icon(IconNames.Diamond)
            ukazano = False
        #hrathudbu = True
        if(not nezmacknuto):
            basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
basic.forever(on_forever)
#control.in_background(onIn_background)

def onIn_background():
    global hrathudbu
    if(hrathudbu):
        basic.show_number(9)