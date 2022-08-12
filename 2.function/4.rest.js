function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3))
// 흩어진 파라매터를 배열로 모은다.
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

let arr = [1, 2, 3]
console.log(Math.max(arr))
//...으로 배열을 스프레드시켜 흩어놓는다.
console.log(Math.max(...arr))

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2)
console.log(Math.max(...arr, ...arr2))
console.log(Math.max(0, ...arr, 7, ...arr2, 8))

arr = [0, ...arr2, 9]
console.log(arr)