//operators

//assignment
let x=10

//arithmetic
a=10
b=5.5
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(++a)
console.log(--a)

//comparison operators
console.log(a==b)
console.log(a===b) //compares datatype as well
console.log(a!==b) //strict

//logical operators
const isValidNumber = a>8 && 10>b
const isValidNumber1 = a>8 || 10>b
console.log(isValidNumber)
console.log(isValidNumber1)
const isValid = true
console.log(!isValid) //Not opertor- Negates

//string operator
console.log('Bruce' + 'Wayne') //Concatenation

//Terniary operator
const isEven= 10%2 === 0 ? true: false //This assigns the first val on left side of collen to the variable based on the condition
const isOdd= 9%2 !== 0 ? 'Number is Odd': 'Number is even' //we can assign anything
console.log(isEven)
console.log(isOdd)
