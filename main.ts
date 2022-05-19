enum RadioMessage {
    right = 32391,
    left = 14947,
    startstop = 5388,
}

let moving:boolean = false;

radio.onReceivedNumber((code) => {
    switch(code) {
        case RadioMessage.right:
            RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90);
            break;
        case RadioMessage.left:
            RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
            break;
        case RadioMessage.startstop:
            if(moving) {
                RingbitCar.brake()
                moving = false;
            }else {
                moving = true;
            }
    }
})
radio.setGroup(21)

basic.forever(() => {
    basic.showIcon(IconNames.Happy)
    if(moving) {
        RingbitCar.forward()
    }
})