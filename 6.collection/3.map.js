let map = new Map()
// key 자동생성은 array, 수동입력은 map을 이용하자.
map.set('1', 'hello')
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(7, map.get('1'), map.get(1), map.get(true))
console.log(8, map.has('1'), map.has(1), map.has(true), map.has(false))
console.log(9, map.size)

console.log(11, map.delete(1), map.delete(2))
console.log(12, map)

map.clear()
console.log(15, map)

//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(20, map)

//
let greens = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(30, entry)

let keys = greens.keys()
console.log(33, keys)

for(let key of keys)
    console.log(36, key)

let values = greens.values()
console.log(39, values)
for(let value of values) console.log(42, value)

greens.forEach((val, key) => console.log(42, key, val))

//
let user = {
    name: 'aiden',
    age: 50
}

let entries = Object.entries(user)
console.log(51, entries)
console.log(52, new Map(entries))

//
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

fruits = Object.fromEntries(map)
console.log(61, fruits)