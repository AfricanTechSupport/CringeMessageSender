input.onButtonPressed(Button.A, function () {
    radio.sendString("THE HEAVY IS DEAD")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
