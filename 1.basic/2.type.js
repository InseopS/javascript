// "" '' `` 모두 문자열을 나타낸다.
let foo = "I am a string"
foo = 'So am I'
foo = `back tick`

foo = 1
foo = 1.0

console.log(1 / 0)
console.log('a' / 1) // NaN(Not a Number)

foo = 1
console.log(isFinite(foo))
foo = 'a'
console.log(isFinite(foo))

foo = '1'
console.log(parseInt(foo) + 1)

foo = 'a'
foo = '100px'
foo = '+1'
foo = '-1'
foo = '1234sdasd213'
// 앞에 숫자가 온다면 뒷 문자는 무시하고 파싱한다.
console.log(parseInt(foo))

foo = '1.6'
console.log(parseInt(foo))
console.log(parseFloat(foo))

let a = Infinity * 2
let b = NaN * 2
console.log(a, b)

a = Infinity * NaN
console.log(a)

foo = 1n // 16자리 넘어가는 숫자를 표현한다.

const okay = true
const fail = false

let val = null

let val2
val2 = undefined // undefined 정의되지 않은 값.
console.log(val2)

let id = Symbol('id')
// typeof 변수의 타입을 반환한다.
console.log(typeof id)

// 1의 타입은 number
val = 1
console.log(typeof val)
val = String(val)
console.log(typeof val)

val = '6' / '2'
console.log(val)

val = false / true
console.log(val)

val = '1'
console.log(typeof val)
val = Number(val)
console.log(typeof val)

console.log(Number('1'), Number(true))
// 0으로 변환 가능한 것들
console.log(Number(' '), Number(''), Number(null), Number(false))
console.log(Number('a'), Number(undefined), Number(NaN))

// 내용이 있어 true 이다.
console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' '), Boolean(0.0001))
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))