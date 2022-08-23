let arr = ['ilya', 'kantor']
let [name, surname] = arr
console.log(3, name, surname)

let [one, two] = [1, 2, 3]
console.log(6, one, two)

let [three, four] = [3]
console.log(9, three, four);

[one, , three] = [1, 2, 3, 4]
console.log(12, one, three)

//
let s = 'i am'
let [a, b, c] = s
console.log(17, a, b, c)

// 배열을 token으로 쪼갤 땐 split을 활용한다.
i = s.split(' ')
console.log(21, i);

[a, b] = i
console.log(24, a, b)

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ')
console.log(29, user)

//
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user)
console.log(38, entries)

for(let [key, value] of entries) console.log(40, key, value)

//
let map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, val] of map) console.log(48, key, val)

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(55, guest, admin);

// rest의 타입 array
[one, two, ...rest] = [1, 2, 3, 4]
console.log(59, one, two, rest);

//
[name, surname='annonymous'] = ['john']
console.log(63, name, surname)

//
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(73, title, height, width);

({title, height, width} = options)

let {width: w, height: h} = options
console.log(78, w, h)
// other의 타입 객체
let {title: t, ...other} = options
console.log(81, t, other)

let {title: subject, wide=1000} = options
console.log(84, subject, wide)

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extar: true
}

// 과제: bread에서 size와 items를 뽑아내라.
let {size, items} = bread
console.log(98, size, items)

//
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(108, w2, h2, item1, item2)

//
let menu = {
    title: 'menu',
    items: ['list','add'],
    expired: 10
}

function showMenu({title: name, items: [item1, item2]}) {
    console.log(118, name, item1, item2)
}

showMenu(menu)