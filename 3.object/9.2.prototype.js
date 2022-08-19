let obj = {}

console.log(3, obj.__proto__)
console.log(4, obj.__proto__ == Object.prototype)

// __ __ <- 접근자
obj = new Object()
console.log(8, Object.prototype)
console.log(9, obj.__proto__)
console.log(10, Object.prototype.__proto__)

console.log(12, obj.toString())

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(17, arr1.__proto__ == arr2.__proto__)
console.log(18, arr1.__proto__ == Array.prototype)

console.log(20, Array.prototype.__proto__)
console.log(21, Object.prototype)
console.log(22, Array.prototype.__proto__ == Object.prototype)
console.log(23, arr2.toString())

//
let one = new Number(1)
console.log(27, one.toString())

//
function User() {}
let user = new User()
console.log(32, user.toString())
console.log(33, obj.toString())
// 모든 생성자의 prototype은 object의 prototype을 부모로 삼는다.