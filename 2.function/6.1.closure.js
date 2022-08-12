const age = 16
// sayAge() // TypeError: sayAge is not a function
// tellAge() // ReferenceError: tellAge is not defined
console.log(sayAge)
// console.log(hello) // ReferenceError: hello is not defined

{
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
    // closure 외부에 있는 변수를 참조 할 수 있는 함수다.
}
// function이 생성된 environment 주소값이 저장된다.
// function 블록이 생길 때 function의 environment 주소값이 블록에 할당된다.
sayAge()
// tellAge()