// The "ADD SIMULATORS" button doesn't work for this one. testing
// Need to manually add DC current/voltage measurement

// sensor tests (voltage, current)
// <sensor>(): number
// isPastThreshold(threshold: number, direction: ThresholdDirection): boolean
console.log("Voltage: " + fwdSensors.voltage1.voltage()) // this line just ensures client is detected immediately (input block interferes)
console.log("Current: " + fwdSensors.current1.current()) // this line just ensures client is detected immediately (input block interferes)
input.onButtonPressed(Button.A, function () {
    if (fwdSensors.voltage1.isPastThreshold(5, fwdEnums.OverUnder.Over)) {
        console.log(fwdSensors.voltage1.voltage() + " is over 5V")
    }
    if (fwdSensors.voltage1.isPastThreshold(5, fwdEnums.OverUnder.Under)) {
        console.log(fwdSensors.voltage1.voltage() + " is under 5V")
    }
    if (fwdSensors.current1.isPastThreshold(100, fwdEnums.OverUnder.Over)) {
        console.log(fwdSensors.current1.current() + " is over 100mA")
    }
    if (fwdSensors.current1.isPastThreshold(100, fwdEnums.OverUnder.Under)) {
        console.log(fwdSensors.current1.current() + " is under 100mA")
    }
})

// setAngleAndWait() doesn't work in the simulator, but does with physical hardware.
// the "ADD SIMULATORS" button will add a 180 servo instead of a 270
// posSetEnabled(servo: fwdBase.FwdServoClient, state: boolean): void
// setAngle(servo: fwdBase.FwdServoClient, angle: number): void
// getAngle(servo: fwdBase.FwdServoClient): number
// positionPresets(position: ServoClockPositions): number
// posIsEnabled(servo: fwdBase.FwdServoClient): boolean
console.log("Servo enabled?: " + fwdMotors.posIsEnabled(fwdBase.leftServo))
input.onButtonPressed(Button.B, function () {
    console.log("test start")
    fwdMotors.posSetEnabled(fwdBase.leftServo, true)
    console.log("enabled?: " + fwdMotors.posIsEnabled(fwdBase.leftServo))
    basic.pause(3000)
    fwdMotors.setAngle(
        fwdBase.leftServo,
        fwdMotors.positionPresets(fwdMotors.ServoClockPositions.Pos0)
    )
    console.log(fwdMotors.getAngle(fwdBase.leftServo))
    basic.pause(3000)
    fwdMotors.setAngle(
        fwdBase.leftServo,
        fwdMotors.positionPresets(fwdMotors.ServoClockPositions.Pos9)
    )
    console.log(fwdMotors.getAngle(fwdBase.leftServo))
    basic.pause(3000)
    console.log("test end")
})
