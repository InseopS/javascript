let val = 1 + 2 * 3 / 2
// % 나머지, ** 제곱 **(1/2) 루트
console.log(val, 5 % 2, 4**2, 4**(1/2))

let i = 1
console.log(++i, i++)

let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar)
console.log(1 + '2', '1' + '2')

// unary plus operator
console.log(1 + +'2')

// 마지막으로 읽은 값을 리턴한다.
console.log(1 || 0, 0 || 1)
console.log(1 && 0, 0 && 1)
console.log(1 && 2, 2 && 1)

//foo 에 값이 있으면 do 함수를 실행한다.
//foo && do(foo)
//bar = baz || createBar()

console.log()
let c = 3 - (a = 1 + 2)
console.log(c)

let d = 2
d *= 2
console.log(d)

console.log()
console.log('2' > 1, '01' == 1, false == 0, '' == false)
console.log(true > 1)

// equivalent 값만 따진다.
console.log(1 == '1', 1 != '1')

// identical type과 값을 같이 따진다.
console.log(1 === '1', 1 !== '1')

console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A')

console.log(null > 0, null < 0, null >= 0, null == 0)
console.log(undefined > 0, undefined < 0, undefined >= 0, undefined == 0)
console.log(NaN > 0, NaN < 0, NaN >= 0, NaN == 0)

console.log(undefined == undefined, null == null, NaN == NaN)