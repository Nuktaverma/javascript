//functions and parameters 


function sayMyName() {
    console.log("N");
    console.log("U");
    console.log("K");
    console.log("T");
    console.log("A");
}

//sayMyName()

/*
function addTwoNumbers(number1,number2) {
    console.log(number1+number2);
}


addTwoNumbers() //NaN
addTwoNumbers(3,4)  //7
addTwoNumbers(3,"4")  //34
addTwoNumbers(3,"a")   //3a
addTwoNumbers(3,null)  //3

//number1 and number2 declared in function are parameters
// values whilw calling function like 3,4 are known as arguments

const result=addTwoNumbers(3,5)   //8
console.log("Result: ",result);    //undefined

*/



function addTwoNumbers(number1,number2) {
    // let result= number1+number2
    // console.log("Nukta");
    // return result  
    return number1+number2
}

const result=addTwoNumbers(3,5)   
console.log("Result: ",result);  