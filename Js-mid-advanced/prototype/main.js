function Person(fName, lName){
    this.firstName=fName
    this.lastName=lName
}

// const Person1= new Person('Bruce','Wayne') //constructor function
// const Person2= new Person('Ganesh','R')

//Person1.getFullName= function(){ //This makes it only for person1
Person.prototype.getFullName=function(){
    return this.firstName+ ' '+ this.lastName
}

// console.log(Person1.getFullName())
// console.log(Person2.getFullName())

function SuperHero(){
    this.isSuperHero= true
}