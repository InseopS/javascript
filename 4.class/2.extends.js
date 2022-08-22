class Animal {
    constructor(name) {
        this.name = name
    }
    
    run(speed) {
        this.speed = speed
        console.log(8, this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(13, this.name, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(18, animal)

animal.run(10)
console.log(21, animal)

animal.stop()
console.log(24, animal)

//
class Rabbit extends Animal {
    /*
    constructor(...args) {
        super(...args)
    }
    */
    hide() {
        console.log(34, this.name, 'hide.')
    }
}

let rabbit = new Rabbit()
console.log(39, rabbit)

rabbit = new Rabbit('rabbit')
console.log(42, rabbit)

console.log(44, rabbit.name)
rabbit.run(100)
rabbit.hide()

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name) // 생성자의 첫 줄에 있어야한다.
        this.color = color
    }

    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(61, this.name, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()