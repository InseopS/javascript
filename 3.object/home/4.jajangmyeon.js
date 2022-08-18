/* 과제:
2. callback.js의 짜장면 이야기를, => 객체지향으로 refectoring하라.
*/
/*
function Food(name) {
    this.name = name
}

function Chef1() {
    this.cook = foodName => new Food(`달콤한 ${foodName}`)
}

function Chef2() {
    this.cook = foodName => new Food(`매운 ${foodName}`)
}


function Waiter() {
    this.serve = (chef, food) => chef.cook(food)
}

const chef1 = new Chef1()
const chef2 = new Chef2()
const waiter = new Waiter()

console.log('',
            waiter.serve(chef1,'짜장면'),'\n',
            waiter.serve(chef2,'짜장면'),'\n',
            waiter.serve(chef2,'짬뽕'))
*/
function Food(taste, name) {
    this.taste = taste
    this.name = name
}

function Chef(taste) {
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)