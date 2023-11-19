/*
function sayMyName(name){
   console.log(`my name is ${name}`)
}
sayMyName('Walter White')
sayMyName('Heisenberg')
*/

const person={
    name:'Ganesh',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    },
}

//Implicit binding
//When a fn is invoked with a dot notation, the left of the dot is what this fn is referencing
person.sayMyName()

//explicit binding
function sayMyName(){
    console.log(`My name is ${this.name}`)
}
sayMyName.call(person)

//New binding
//When a function is invoked with a the new keyword
//within the function, this keyword will always reference a empty object
function Person(name){
    //this={} ===== This is invoked when a new person object is created witha  new keyword
    this.name=name
}

const p1= new Person('Ganesh') //Constructor function
const p2= new Person('Batman')

console.log(p1.name,p2.name)


//Default binding
sayMyName()