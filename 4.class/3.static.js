class Article {
    static publiser = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
    }

    toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }
}
// 참고내용, + 연산자는 피연산자의 자료형에 따라 리턴이 달라 hint는 default다.
// https://leesoo7595.github.io/javascript/2020/06/05/JavaScript_toPrimitive/

// static.변수명으로 바로 접근
console.log(29, Article.publiser)

//
Article.address = 'seoul'
console.log(33, Article.address)

Article.getPrice = () => 2000
console.log(36, Article.getPrice())


//
let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(43, Article.compare(article1, article2))

//
console.log(46, `${article1}`)
console.log(47, article1 + '')

// static 변수는 클래스에 저장돼있다.
console.log(50, article1.publiser, article1.address, article1.compare)
console.log(51, Article.title, Article.viewCnt)
// static method compare는 조회가 안된다.
console.log(53, Object.keys(Article))
console.log(54, Article.prototype)
console.log(55, Object.keys(article1))

//
let articles = [article1, article2]
console.log(59, articles)
// 오름차순 정렬 (a - b)
articles.sort(Article.compare)
console.log(62, articles)
// 내림차순 정렬 (b - a)
Article.compare = (a, b) => b - a
articles.sort(Article.compare)
console.log(66, articles)