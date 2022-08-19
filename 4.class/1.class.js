// sugar syntax, 클래스 유저를 만드는 문법, 사용빈도 낮음
class User {
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(8, `I am ${this.name} `)
    }
}

let user = new User('john')
console.log(13, user.name)
user.introduce()

//
User = class {
    name
    age

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(27, `${this.name} / ${this.age}`)
    }
}

new User('abel', 12).introduce()

//
function makeClass(phase) {
    return class {
        sayHi() {
            console.log(37, phase)
        }
    }
}

User = makeClass('Hello')
new User().sayHi()