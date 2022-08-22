class A {}

class B extends A {}

let a = new A()
let b = new B()

console.log(8, a instanceof A, a instanceof B, a instanceof Object)
console.log(9, b instanceof A, b instanceof B, b instanceof Object)

console.log(11, typeof a, typeof b)
console.log(12, typeof A, typeof B)