let set = new Set()

let user1 = {name: 'john'}
let user2 = {name: 'pete'}

set.add(user1).add(user2).add(user1)
console.log(7, set)

console.log(9, set.size)
console.log(10, set.has(user1), set.has(user2), set.has({}))

console.log(12, set.delete(user1))
console.log(13, set)

//
set.add(user1)

for(let user of set) console.log(18, user)

set.forEach(val => console.log(20, val))

//
set = new Set([1, 2, 3])
console.log(24, set)

//
let arr = Array.from(set)
console.log(28, arr)
// 문자열도 배열이라 set에 들어가고 l은 중복처리된다.
set = new Set('hello')
console.log(31, set)