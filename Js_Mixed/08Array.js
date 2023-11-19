var countries=["India","USA","Japan","Vietnam"];

var states=new Array("Kerala","Delhi","Mumbai","Tamilnadu");

console.log(countries[2]);

// To calculate the length of the Array. 
console.log(states.length); 
states.pop();
console.log(states);
// To insert an new Element into the first position of the Array. 
states.unshift("This is a unshift");
console.log(states);
// To delete the first Element from the Array.
states.shift();
console.log(states);