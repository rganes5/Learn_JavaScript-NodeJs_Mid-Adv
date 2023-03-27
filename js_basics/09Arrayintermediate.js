// function isEven(Element){
//     return Element%2===0;
// }
//console.log(isEven(2));

// Another method 

var isEven=(Element) => {
    return Element%2===0;
}
// console.log(isEven(3));





// CALLBACK Function
var result= [2,4,6].every(isEven);  //Checks on each and every element inside the array and passes into the above function. 
console.log(result);


//CALLBACK function  using a simplified method 

var result= [2,4,6].every((e) => (e%2===0))
console.log(result);