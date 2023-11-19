//if block

const num=5
if(num>0){
    console.log('Num is positive')
}

//if else

const num1= -5
if(num1>0){
    console.log('Num is positive')
}else if(num1<0){
    console.log('Num is negative')
}else{
    console.log('Number is zero')
}

//switch

const color= 'white'
switch (color) {
    case 'red':
        console.log('Color is red')
        break;
    case 'blue':
        console.log('Color is blue')
        break;
    case 'green':
        console.log('Color is green')
        break;
    default:
        console.log("invalid color")
        break;
}