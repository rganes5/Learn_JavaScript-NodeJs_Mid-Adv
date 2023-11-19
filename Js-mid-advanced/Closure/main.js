//closure

function outer(){
    let counter =0
    function inner(){
        counter++
        console.log(counter)
    }
    //inner()
    return inner
}
const fn= outer()
fn()
fn()
//outer()
//outer() //same result becaue of new copy is created
