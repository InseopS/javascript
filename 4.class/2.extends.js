class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(8, this.name, this.speed, ' run.')
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
console.log(23, animal)

//
class Duck extends Animal {
    run(speed) {
        this.speed = speed / 10
        console.log(29, this.name, this.speed, 'run.')
    }

    hide() {
        console.log(33, this.name, 'hide.')
    }
}

let duck = new Duck('duck')
console.log(38, duck)

duck.run(10)
duck.stop()
duck.hide()

//
class Rabbit extends Animal {
    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(52, this.name, 'hide.')
    }
}

new Rabbit('rabbit').stop()

//
Rabbit = class extends Animal {
    constructor(name, color) {
        super(name) // 생성자의 첫 줄에 있어야한다.
        this.color = color
    }
}

console.log(66, new Rabbit('rabbit', 'black'))