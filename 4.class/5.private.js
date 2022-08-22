class CoffeeMachine {
    #waterAmount

    get waterAmount(){
        return this.#waterAmount + 100
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = 2 * waterAmount
    }
}

console.log(13, CoffeeMachine)
console.log(14, CoffeeMachine.prototype)

let machine = new CoffeeMachine()
console.log(17, machine) // #waterAmount는 객체 속성에 보이지 않는다.

machine.waterAmount = 1
console.log(20, machine.waterAmount)
// SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
// machine.#waterAmount = 1