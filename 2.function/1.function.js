function greet(){
    console.log('hello')
}

greet()

let salute = function() {
    console.log('hi')
}

salute()

console.log(salute)

let sayHello = function(user, greeting) {
    return `${greeting}, ${user}` // template literal
}

console.log(sayHello('rebecca', 'hello'))

// 과제: HI 라고 인사하는 function을 정의하고, 실행하라.
const sayHi = function() {
    console.log('HI')
}
const say = sayHi
sayHi()
say()

//
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak();

// 앞선 함수 호출에 끝처리 (;)가 돼있어야 동작한다.
(function() {
    console.log('earth')
})()

//
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

myFn(function() {
    return 'moon'
})

let argFn = function() {
    return 'star'
}
myFn(argFn)

//
let showMsg = function(form, msg='no message') {
    console.log(`${form}: ${msg}`)
}
showMsg('trinity', 'follow rabbit')
showMsg('trinity')