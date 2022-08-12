function sayHi() {
    console.log('Hi')
}

// 1번 parameter를 quo에 넣었다가 지정된 시간 후 꺼낸다.
setTimeout(sayHi, 1000)

//
function greet(phrase, who) {
    console.log(phrase, who)
}
// 지정 시간 후 모든 요소를 꺼낸다.
setTimeout(greet, 2000, 'hello', 'knox')
//
let timeId = setTimeout(() => console.log('hoo'), 3000)
// 지정한 quo를 비운다.
clearTimeout(timeId)