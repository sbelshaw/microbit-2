radio.onReceivedString(function on_received_string(receivedString: string) {
    if ("forward" == receivedString) {
        RingbitCar.forward()
    } else if ("stop" == receivedString) {
        RingbitCar.brake()
    }
    
})
radio.setGroup(68)
basic.forever(function on_forever() {
    
})
