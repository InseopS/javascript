// 객체에는 숨겨진 prototype property가 있다.
// 생성자는 객체가 하나 자동생성 되는데 prototype이 해당객체의 주소값을 참조한다.
// 해당 prototype 객체에 있는 constuctor 속성의 주소값은 생성자의 주소값을 참조한다.

let animal = {
    isAlive: true
}

function Rabbit(name) {
    this.name = name
}

console.log(13, Rabbit.prototype.constructor)

let rabbit1 = new Rabbit('black')
console.log(rabbit1.isAlive)
console.log(Rabbit.prototype.constructor == rabbit1.__proto__.constructor)
//
Rabbit.prototype = animal
console.log(20, Rabbit.prototype.constructor)

rabbit2 = new Rabbit('white')
console.log(rabbit2.isAlive)
console.log(24, rabbit2.__proto__.constructor)
console.log(Rabbit.prototype.constructor == rabbit2.__proto__.constructor)
console.log(25, rabbit1.__proto__.constructor)

//
function Duck(name) {
    this.name = name
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck)

let duck = new Duck('duck')
console.log(duck.__proto__)
console.log(duck.__proto__.constructor)

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__)

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')