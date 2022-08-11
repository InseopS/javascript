if(true){}
if(false){} else {}
// undefined는 객체의 존재 유무를 파악하는 용도로 쓰기 좋다.
if(undefined) {console.log('undefined !')}
if(null) {console.log('null !')}
if(0) {console.log('0 !')}

if(-1) {console.log('-1 !')}

console.log(true ? 1 : 0)

let val

switch ('boo') {
    case 'bar': val = 'bar'; break
    case 'baz': val = 'bsz'
    default: val = 'all right'
}

console.log(val)