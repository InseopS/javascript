let range = {
    from: 1,
    to: 3,
    [Symbol.iterator]() {
        this.current = this.from
        return this
    },
// done(itorating 끝 여부), value(값) 2개 속성 필수
    next() {
        if(this.current <= this.to)
            return {
                done: false,
                value: this.current++
            }
        else
            return {
                done: true
            }
    }
}
// for ( of 객체) 시 Symbol.iterator를 call한다. 그 후 next()를 반복한다.
for(let num of range)
    console.log(23, num)

// generator 는 반복문이 내부에 있어야한다.
function* generator() {
    let val = 1
    while(val <= 3) yield val++
}

for(let num of generator())
    console.log(32, num)

let g = generator()
console.log(35, g, typeof g)

//
function* gen() {
    yield* generator()
    yield* ['a', 'b']
    yield 9
}

for(let val of gen())
    console.log(45, val)