let msg: string = 'hello'
// msg = 1 type 불일치

let val: number = 1
let nullableStr: string | null = null
nullableStr = 'hi'
// nullableStr = undefined

let undefinedorNumber: undefined | number
undefinedorNumber = 10
undefinedorNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'
numberOrStringOrNull = null

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

//
let a = 1
let b = 'b'
let c = true