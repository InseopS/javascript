let makeUser = function(name, age) {
    return{
        name: name,
        age: age
    }
}
// object literal
makeUser = function(name, age) {
    return {
        name,
        age
    }
}

console.log(makeUser('doris',57))

// object constructor
// 생성자는 관례상 함수를 대문자로 시작한다.
function User(name) {
    // this = {}
    this.name = name
    this.greet = () => console.log(`I am ${this.name}.`)
    // return this 생략이 가능하다.
}

let user1 = User('bob')
console.log(user1)
// new를 붙여야 생성자로 기능한다.
user1 = new User('bob')
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

//
let str = String(1)
console.log(typeof str)

str = new String(1)
console.log(typeof str)

//
let human = new function() {
    this.name = 'meg'
    this.age = 27
}

console.log(typeof human, human.name)

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'}
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name)

// console.log(BigUser().name, SmallUser().name)
// TypeError: Cannot read properties of undefined (reading 'name')
console.log(BigUser().name, SmallUser()?.name)
// 과제: new를 하지 않고, 앱이 살도록 위 코드를 수정하라.

//
const user = new Object()
console.log(user)
user.age = 12

//
const person = Object.create(user)
// person 자체는 비어있다.
console.log(person)
// person의 참조 객체인 user의 age를 불러온다.
console.log(person.age)
console.log(person == user)

person.name = 'mandarin'
console.log(user)