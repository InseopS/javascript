let arr = new Array(1, 'hello', true, {age: 3}, function f(){}, class A{})
console.log(2, arr)

arr = [null, undefined, NaN]
console.log(5, arr)

//
arr = []
arr[0] = 'a'
arr[2] = 'c'
// 배열의 중간 빈 공간은 undefined가 된다.
console.log(12, arr)
console.log(13, arr[1])

console.log(15, arr.length)

// 행, 열이 같아야 matrix다.
let matrix = [
    [1, 2],
    [3, 4]
]

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(27, c)

arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(34, arr) // 아래부터 쌓는다.
console.log(35, arr.pop()) // 위부터 꺼낸다.
console.log(36, arr) // 꺼낸 값은 배열에서 빠진다.

//
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(44, arr)
console.log(45, arr.shift()) // 안쪽부터 꺼낸다.
console.log(46, arr)

//
a = [0, 1, 2, 3, 4, 5]
b = a.slice(3) // n번째부터 배열을 읽는다.
console.log(51, b, a)

//
arr = [0, 7, 8, 5]
arr.splice(1, 2, 1, 2, 3, 4,) // (a, b, ...args) a부터 b를 제거하고 args 배열을 넣는다.
console.log(56, arr)

//
arr = ['a', 'b', 'c']
console.log(60, arr.indexOf('b'))

arr.splice(arr.indexOf('b')) // b 부터 모두 제거한다.
console.log(63, arr)

arr = ['a', 'b', 'c', 'd']
arr.splice(arr.indexOf('b'), 1) // b 부터 1개 지운다.
console.log(67, arr)

//
arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(72, arr, s)
// 과제: s 가 arr 인지, 확인하라.
console.log(s == arr)

arr = [8, 11, 22, 34, 9]
console.log(77, arr.sort()) // 원소를 string으로 취급하고있다.

console.log(79, arr.sort((a, b) => a - b)) // 오름차순
console.log(80, arr.sort((a, b) => b - a)) // 내림차순

//
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(86, arr[i])

// 과제: 원소를 출력하라.
for(let key in arr) console.log(89, arr[key])
// of를 사용하면 val을 불러온다.
for(let val of arr) console.log(89, (val))

//
function print(e) {
    console.log(95, e)
}

function print2(e, i) {
    console.log(99, `[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

arr.forEach(print)

arr.forEach(print2)
console.log(111, arr)

arr.forEach(print3)
console.log(114, arr)

// map 기존 배열을 읽고 리턴한다.
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)
console.log(119, arr, arr2)

//
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName =>
            console.log(127, this.title, ':', studentName))
    }
}

group.list()

// 합쳐진 데이터 조각 하나를 token이라고 부른다.
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(136, greeting)
console.log(137, typeof greeting)

console.log(139, arr.join('/'))
//과제: arr.join()에서 'helloworld2'를 return 하라.
console.log(140, arr.join(''))

//
arr = [1, 2, 3]
str = arr.toString()
console.log(146, str, '/', typeof str)

//
str = JSON.stringify(arr)
console.log(150, str, '/', typeof str)