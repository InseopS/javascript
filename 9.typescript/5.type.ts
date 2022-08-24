type Man = {
    name: string
}

const man: Man = {
    name: 'john'
}

//
type Men = Man[]

const men: Men = [{name: 'name'}]

//
type Color = 'red' | 'green' | 'blue'
let color: Color = 'red'
// color = 'yellow'

//
type Employee = Man & {
    job: string
}

const employee: Employee = {
    name: 'berg',
    job: 'programmer'
}