control.in_background(onIn_background)

Player1, Player1time, zmacknuto, Player2, Player2time, hrathudbu, delka = False, 0, False, False, 0, False, 0 
restartovani()

def on_forever():
    global Player1, Player1time, zmacknuto, Player2, Player2time, hrathudbu, delka
    console.log_value("x", delka)  
    pin1pressed = input.pin_is_pressed(TouchPin.P1)
    pin2pressed = input.pin_is_pressed(TouchPin.P2)
    console.log_value("pin1", pin1pressed)
    #console.log_value("ukazano", ukazano)
    if pin1pressed:
        if not zmacknuto:
            Player1 = True
            Player1time = control.millis()
    if pin2pressed:
        if not zmacknuto:
            Player2 = True
            Player2time = control.millis()
    if (Player1 or Player2):
        if (control.millis() >= delka):
            zmacknuto = True
    if control.millis() >= delka:
        if(not zmacknuto):
            hrathudbu = True
            basic.show_icon(IconNames.Diamond, 0)
        if(zmacknuto):
            hrathudbu = False
            if(Player1 and Player2):
                if (Player1time <= delka and Player2time <= delka):
                    basic.show_string("C")
                else:
                    basic.show_string("R")
            elif(Player1):
                if(Player1time < delka):
                    basic.show_string("B")
                else:
                    basic.show_number(1)
            else:
                if(Player2time < delka):
                    basic.show_string("A")
                else:
                    basic.show_number(2)
            restartovani()
            
basic.forever(on_forever)

def onIn_background():
    if hrathudbu:
        music.play_tone(Note.E, music.beat(12))
        hrathudbu = False

def restartovani():
    global Player1, Player1time, zmacknuto, Player2, Player2time, hrathudbu, delka
    basic.clear_screen()
    Player2 = False
    Player1time = 0
    Player1 = False
    Player2time = 0
    pins.touch_set_mode(TouchTarget.P1, TouchTargetMode.CAPACITIVE)
    pins.touch_set_mode(TouchTarget.P2, TouchTargetMode.CAPACITIVE)
    zmacknuto = False
    delka = randint(3, 10)*1000 + control.millis()
    hrathudbu = False