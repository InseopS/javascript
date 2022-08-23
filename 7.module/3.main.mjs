import {greet, add} from './1.named.mjs';
import * as named from './1.named.mjs' // 중복 이름 피하기 위해 사용
import div from './2.default.mjs'

console.log(5, greet, add(1, 2))
console.log(6, named.greet, named.add(1, 2))

console.log(8, div(4, 2))