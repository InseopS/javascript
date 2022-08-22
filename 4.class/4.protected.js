class CoffeeMachine {
    waterAmount

    constructor(voltage) {
        this.voltage = voltage
    }
}

console.log(9, CoffeeMachine)
console.log(10, Object.keys(CoffeeMachine))
console.log(11, CoffeeMachine.prototype)

let machine = new CoffeeMachine(220)
console.log(14, machine)

machine.waterAmount = 1
machine.voltage = 100
console.log(18, machine)

//
CoffeeMachine = class {
    _waterAmount

    get waterAmount() {
        return this._waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this._waterAmount = 2 * waterAmount
    }
}

console.log(33, CoffeeMachine.prototype)

machine = new CoffeeMachine()
console.log(36, machine)

machine.waterAmount = 1
console.log(39, machine)
console.log(40, machine.waterAmount)

machine._waterAmount = 11
console.log(43, machine._waterAmount)