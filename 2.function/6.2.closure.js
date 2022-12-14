const age = 16

// sayAge() // ReferenceError: sayAge is not defined
// tellAge() // ReferenceError: tellAge is not defined

init()
// sayAge() // ReferenceError: sayAge is not defined

function init() {
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}
init()
// sayAge() // ReferenceError: sayAge is not defined
// tellAge() // ReferenceError: tellAge is not defined