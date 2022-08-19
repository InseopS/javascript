/* 과제: 다음 상속 관계로 객체들을 디자인하라.
<life>
name 문자값
eat() 메서드
excrete()

<animal>
name
move()

<bird>  <mammal>
name    name
move()  move()
--

bird.eat().
bird excrete.
bird fly.
mammal eat.
mammal excrete.
mamal run.
*/
let life = {
    name: 'life',
    eat() {
        console.log(this.name, 'eat.')
    },
    excrete() {
        console.log(this.name, 'excrete.')
    }
}

let animal = {
    name: 'animal',
    move() {},
    __proto__: life
}

let bird = {
    name: 'bird',
    move() {
        console.log(this.name, 'fly.')
    },
    __proto__: animal
}

let mammal = {
    name: 'mammal',
    move() {
        console.log(this.name, 'run.')
    },
    __proto__: animal
}

bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()