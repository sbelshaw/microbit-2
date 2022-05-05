def on_received_string(receivedString):
    if "forward" == receivedString:
        RingbitCar.forward()
    elif "stop" == receivedString:
        RingbitCar.brake()
radio.on_received_string(on_received_string)

radio.set_group(68)

def on_forever():
    pass
basic.forever(on_forever)

def on_received_string(receivedString):
    if "right" == receivedString:
