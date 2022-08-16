/* 과제:
2. callback.js의 짜장면 이야기를, => 객체지향으로 refectoring하라.
*/

function Food(name) {
    this.name = name
}

function Chef1() {
    this.cook = foodName => new Food(`달콤한 ${foodName}`)
}

function Chef2() {
    this.cook = foodName => new Food(`매운 ${foodName}`)
}


// function Waiter() {
//     this.serve = (chef, food) => chef(food)
// }

// // let chef12 = (food) => `달콤한 ${food}. \n`

// // let chef22 = (food) => `매운 ${food}. \n`

// // let waiter2 = (food, chef) => chef(food)

const chef1 = new Chef1()
const chef2 = new Chef2()
// const waiter = new Waiter()
// console.log(waiter.serve('짜장면', chef1),
//             waiter.serve('짜장면', chef2),
//             waiter.serve('짬뽕', chef2))

console.log(chef1.cook('s'))