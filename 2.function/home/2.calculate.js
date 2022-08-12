/* 과제:
1.calculate.js를 callback으로 refactoring 하라.
-, *, / 연산을 callback으로 처리한다.
*/

function minus(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    return a / b
}

function calculate(a, b, op=multiply) {
    return op(a, b)
}

console.log(calculate('10' ,'2' ,minus),
            calculate('10' ,'2' ,multiply),
            calculate('10' ,'2' ,divide),
            calculate('10' ,'2'))