console.log(1, Date(), '\n1', typeof Date())

let date = new Date()
console.log(4, date, '\n4', typeof date)
console.log(5, date.toLocaleDateString())

date = new Date('2022-08-23T07:27:30.999Z') // UTC + 9h = 한국시간
console.log(8, date.toLocaleDateString())
console.log(9, date.toLocaleTimeString())

console.log(11,
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getUTCHours(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds(),
    date.getDay()
)

console.log(23, date.getTime())
console.log(24, Date.now())

date = new Date(0)
console.log(27, date)

date = new Date(1000 * 60 * 60 * 24)
console.log(30, date)

date = new Date(-1000 * 60 * 60 * 24)
console.log(33, date)