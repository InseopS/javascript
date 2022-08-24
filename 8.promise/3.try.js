new Promise((resolve, reject) => reject(new Error(1)))
    .catch(e => console.log(2, e.message))

new Promise((resolve, reject) => {throw new Error(2)})
    .catch(e => console.log(5, e.message))

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(e => console.log(10, e.message))

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla())
    .catch(e => console.log(14, e.message))
// catch handler는 마지막에 작성해야한다.
new Promise((resolve, reject) => {throw new Error(4)})
    .catch(e => console.log(17, e.message))
    .then(result => console.log(18, result))

new Promise((resolve, reject) => {throw new Error(5)})
    .catch(e => {
        if(e instanceof URIError);
        else {
            console.log(24, e.message)
            throw e
        }
    }).then(() => console.log(27, '여기는 실행되지 않습니다.'))
    .catch(e => console.log(28, e.message))