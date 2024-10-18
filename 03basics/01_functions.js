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
//console.log("Result: ",result);  


function loginUserMessage(username){
    if (username==undefined) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Nukta")); //Nukta just logged in
//console.log(loginUserMessage("")) // just logged in
//console.log(loginUserMessage())   // undefined just logged in



function calculateCartPrice(...num1) {    //... means rest operator
    return num1   
}

//console.log(calculateCartPrice(2));
//console.log(calculateCartPrice(200,400,500,600));


function calculateCartPrice(val1,val2,...num1) {   //important foe interviews
    return num1   
}

//console.log(calculateCartPrice(200,400,500,600)); // [500,600]




const user={
    username:"Nukta",
    price:199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);
}

//handleObject(user)
handleObject(
    {
        username:"Ryan",
        price:500
    }
)



const myNewArray=[200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
