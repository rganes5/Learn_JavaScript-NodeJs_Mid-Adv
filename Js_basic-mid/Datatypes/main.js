//Primitive 7 types

//String
const name = 'Ganesh'
const Location= "Kerala"
const City= `Kumily`

//Number
const total= 0
const PI=3.14

//Boolean
const isPrimaryNumber= true
const isNewUser= false

// undefined- if var is defined and value is not provided then it is undefined
let res
console.log(res)
const result= undefined

// null - unknown value
const data=null

// BigInt - larger int value
 
// Symbol - unchangeable value

//*********//
//Non Primitive - collection of value

// Object - complex datatypes and defined as key value pairs

const person= {
    'firstName': 'Bruce',
    'lastName':'Wayne',
    'age':25,
}

console.log("first name is",person.firstName)
console.log(person)


//array
const oddNumbers= [1,3,5,7,9]
console.log("first position",oddNumbers[0])


//dynamically types
a='ganesh'
a=23
console.log(a)