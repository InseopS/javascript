let json = '{"name": "john", "age": 30}' // 문자는 ""로 표기한다.
let user = JSON.parse(json)
console.log(3, typeof json, typeof user)

json = '{age: 30}'
// JSON.parse(json) SyntaxError: Unexpected token a in JSON at position 1
try {
    JSON.parse(json)
} catch {
    console.log(12, 'ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(18, e.name, '\n', e.message, '\n', e.stack)
}