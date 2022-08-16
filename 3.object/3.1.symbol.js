// Symbol의 값은 유일하다.
let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id, id1, id2)

console.log(id1 == id2)

console.log(id.toString())
console.log(typeof id)

console.log(id1.description, id2.description, id.description)

let user = {
    name: 'neo'
}

let userId = Symbol('userId')
user.userId = 1
user[userId] = 2

console.log(user)

// 과제: user 객체를 iterating 해서, key 들을 출력하라.
// Symbol key는 조회가 되지 않는다.
for(let key in user) console.log(key)

console.log(Object.keys(user))

// global symbol registry, 같은 key를 사용하는 symbol은 주소가 같다.
id1 = Symbol.for('id')
id2 = Symbol.for('id')
console.log(id1 == id2)

let key = Symbol.keyFor(id1)
console.log(key, typeof key)

//
id1 = Symbol.for('name') // global symbol
id2 = Symbol('name') // local symbol, key가 없다.
console.log(id1 == id2)

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2))