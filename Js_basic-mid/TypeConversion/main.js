//JS supports implicit and explicit type conversion
//Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another.

//Implicit

console.log(1+'3') //concatenation happens
console.log(true+'3')

console.log('4'-'3') //here since we use a substraction, it converts to numbers

console.log('Bruce'-'Wayne') //Not a number

console.log('5'-true) //here true is 1 and falsae is 0
console.log('5'-false)

console.log(5+ undefined) //Not a number


//Explicit
console.log(Number('5'))
console.log(Number(false))
console.log(Number(''))

console.log(parseInt('10'))
console.log(parseFloat('3.14'))

console.log(String(500))
console.log(String(true))
console.log(String(undefined))

console.log((500).toString())

console.log(Boolean(10))
console.log(Boolean(null)) //false -- null , undefined 0 '' NaN
