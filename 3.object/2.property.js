let user = {}

user.height = 200
user['weight'] = 80

console.log(6, user.height, user.weight)

// 객체 속성 삭제
delete user.weight
console.log(10, user.weight)

console.log(12, 'height' in user)
console.log(13, 'weight' in user)
// for iterating
for(let key in user) console.log(15, user[key])

user.name = 'paker'
console.log(18, Object.keys(user))
console.log(19, Object.values(user))
console.log(20, Object.entries(user))

//
user = {
    greet: function() {console.log(24, 'hello')}
}

user = {
    greet: () => console.log(28, 'hello')
}

user = {
    greet() {
        console.log(33, 'hello')
    }
}

user.greet()

// optional chainning
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(44, user.address.street)
// console.log(user.city.name)
console.log(46, user.city?.name)

//
let street
// street = user.city.street
street = user?.city?.street
console.log(52, street)
// ?? 뒤에 기본값 작성
street = user?.city?.street ?? 'where'
console.log(55, street)

// optional chainning은 = 할당연산자 오른쪽에 사용해야 한다.
// user?.address = 'sejong'

user = null
// user.greet() // TypeError: Cannot read properties of null (reading 'greet')
console.log(62, user?.greet)
user = undefined
// user.greet() // TypeError TypeError: Cannot read properties of undefined (reading 'greet')

//
user = {}
// user.greet()
// user에 greet method가 있으면 call 한다.
console.log(70, user.greet?.())