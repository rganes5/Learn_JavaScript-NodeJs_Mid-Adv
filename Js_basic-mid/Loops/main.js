//for loop

for (let i=1;i<=5;i++){
    console.log('iteration number is ' + i)
}

//while loop

let j=1
    while(j<=5){
        console.log('iteration number '+ j)
        j++
}

//Do.. while loop

//one condition is met atleast inside the do block
let k=1
//let k=6
do{
    console.log('iteration number = ' + k)
    k++
}while(k<=5)

//For..of loop
//best for collection of data(in golang for range loop is similiar)
const numArray= [1,2,3,4,5]
for(const num of numArray){
    console.log('iteration number from the array is ' + num)
}