//Nested function

//Lexical scoping
//Js will move from inner then to the outer and also 
//Nested func has access to variables that are in the innner scope and also the outer scope
let a =10

function outer(){
    let b=20
    function inner(){
        let c=30
        console.log(a,b,c)
    }
    inner()
}
outer()