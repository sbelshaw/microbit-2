

def on_received_string(receivedString):
    if "forward" == receivedString:
        RingbitCar.forward()
    elif "stop" == receivedString:
        RingbitCar.brake()
    elif "right" == receivedString:
        RingbitCar.steering_angle(RingbitCar.Direction_turn.RIGHT, 90)
    elif "left" == receivedString:
        RingbitCar.steering_angle(RingbitCar.Direction_turn.LEFT, 90)
radio.on_received_string(on_received_string)

radio.set_group(68)

def on_forever():
    pass
basic.forever(on_forever)
