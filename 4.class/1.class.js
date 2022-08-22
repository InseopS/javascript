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

// [[isClassConstructor]]: true
// User('john') // TypeError: Class constructor User cannot be invoked without 'new'

//
User = class {
    name // property
    age
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(30, `${this.name} / ${this.age}`)
    }
}

user = new User('abel', 12)
user.introduce()
console.log(36, user.name)
console.log(37, User.prototype.name)

//
function makeClass(phase) {
    return class {
        sayHi() {
            console.log(43, phase)
        }
    }
}

User = makeClass('Hello')
new User().sayHi()