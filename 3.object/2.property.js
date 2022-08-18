let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight)

// 객체 속성 삭제
delete user.weight
console.log(user.weight)

console.log('height' in user)
console.log('weight' in user)

for(let key in user) console.log(user[key])

user.name = 'paker'
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

//
user = {
    greet: function() {console.log('hello')}
}

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet()

// optional chainning
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street)
// console.log(user.city.name)
console.log(user.city?.name)

//
let street
// street = user.city.street
street = user?.city?.street
console.log(street)
// ?? 뒤에 기본값 작성
street = user?.city?.street ?? 'where'
console.log(street)

// optional chainning은 = 할당연산자 오른쪽에 사용해야 한다.
// user?.address = 'sejong'

user = null
// user.greet() // TypeError: Cannot read properties of null (reading 'greet')
console.log(user?.greet())
user = undefined
// user.greet() // TypeError TypeError: Cannot read properties of undefined (reading 'greet')

//
user = {}
// user.greet()
// user에 greet method가 있으면 call 한다.
console.log(user.greet?.())