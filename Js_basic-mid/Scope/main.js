//The accessibility or visibility of variables
//Block , function and global scope


//Block scope
if (true){
    const myName= 'Ganesh'
    console.log(myName)
}
//console.log(myName) => error

//Function scope
function test(){
    const myName= 'Batman' //In this the even though myName is used the scope belongs inside function
    console.log(myName)

}
test()

const arrowFunc = (myName)=> myName+'Batman'
console.log(arrowFunc("Hello "))

//Global scope

const myNum =100
const myName='Superman' //This wont be used since the scope is global

if (true){
    const myName= 'Ganesh'
    console.log(myName)
    console.log(myNum)
}

function test1(){
    const myName= 'Batman' //In this the even though myName is used the scope belongs inside function
    console.log(myName)
    console.log(myNum)
}
test1()
