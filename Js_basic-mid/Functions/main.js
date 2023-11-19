//Functions

function greet(name ){
    console.log("Good morning "+name)
    //console.log("Good morning !",name)
}

greet('Ganesh R') //argument is string
greet('Bruce Wayne')
greet('Cat women')

let nameArray=['Ganesh','Batman']
for (const name of nameArray){
    greet(name)
}


//sum func
function add(a,b){
    return a+b
}
const sum=add(2,4)
console.log(sum)


//arrow functions

const arrowSum =(num1, num2) => {
    return num1+num2
}

//OR
const arrowProduct =(n1, n2)=> n1*n2

console.log(arrowSum(10,5))
console.log(arrowProduct(2,5))