function sum(a,b,c){
    return a+b+c

}
console.log(sum(1,2,3))

//Transforming to currying
// sum(1,2,3) sum(1)(2)(3) one at a time

function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a,b,c)
            }
        }
    }
}

const curriedSum= curry(sum)
console.log(curriedSum(1)(2)(3))