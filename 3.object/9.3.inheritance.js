let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

// 과제: 토끼를 object literal 및 생성자로 만들어라.
//      토끼는 age = 3 property를 갖고있다.
let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(17, animal.__proto__)
console.log(18, rabbit.__proto__)

console.log(20, animal.name, rabbit.age)

rabbit.__proto__ = animal
console.log(23, rabbit.__proto__)
console.log(24, rabbit.name, rabbit.age)

//
animal = {
    walk() {
        console.log('29 animal walk.')
    }
}

rabbit = {
    __proto__: animal // rabbit is an animal
}

rabbit.walk()

//
let user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}

console.log(48, administrator.name)

administrator.name = 'jonadan'
console.log(51, administrator.name)


//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`59 ${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()
lion.eat()

// keys (해당 객체만 iterating)
console.log(78, Object.keys(rabbit))

// 과제: rabbit의 key 들을 iterating 해서 출력하라. 
// (부모 포함 iterating)
for(let key in rabbit) console.log(82, key)

let msg
for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    if(isOwn) msg = `child's key: ${key}`
    else msg = `parent's key: ${key}`
    console.log(89, msg)
}