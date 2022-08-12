function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3))

//...변수명은 배열을 나타낸다.
add = function(...args) {
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}
console.log(add(1, 2, 3))

// rest 사용 주의점 파라메터 제일 마지막에 배치돼야한다.
function printName(firstName, lastName, ...titles) {
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)    
}

printName('adam', 'smith', 'operator', 'consul')

//
function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

console.log(Math.max(1, 2, 3))