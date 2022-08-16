// sayHi() // ReferenceError: Cannot access 'name' before initialization
let name = 'neo'
sayHi()

// function declaration은 라인과 상관없이 로드와 함께 준비가 된다.
function sayHi() {
    console.log('hi,', name)
}

sayHi()
// sayHello() // ReferenceError: Cannot access 'sayHello' before initialization
// function expression 값으로 함수를 표현한다.
const sayHello = function() {
    console.log('Hello,', name)
}

sayHello()