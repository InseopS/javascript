let user = {
    name: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}
// serializing
let json = JSON.stringify(user)
console.log(10, json)

//
user = {
    name: 'jessie',
    room: {
        number: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
}
// json 변환 시 메서드, 심볼, undefined 값은 무시된다.
console.log(26, JSON.stringify(user))

//
let room = {
    number: 23
}

let meetup = {
    title: 'conference',
    room
}

console.log(38, JSON.stringify(meetup))

room.toJSON = function() {return this.number}
let s = JSON.stringify(meetup)
console.log(42, s)

// json -> object parsing
let manJson = '{"name": "will", "age": 27, "mager": ["computer", "art"], "friend": {"name": "scott", "age": 27}}'
let man = JSON.parse(manJson)

console.log(48, man)
console.log(50, typeof man)