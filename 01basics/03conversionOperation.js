let score="33abc"

console.log(typeof score) 
console.log(typeof (score)) 
let valueInNumber=Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)  //Nan means not a number

let score1=null
console.log(typeof score1) 
console.log(typeof (score1)) 
let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)  

let score2=null
console.log(typeof score2) 
console.log(typeof (score2)) 
let valueInNumber2=Number(score2)
console.log(typeof valueInNumber2)
console.log(valueInNumber2)  


// "33" =>33
// "33abc" => Nan
// true => 1 ; false => 0

let isloggedIn=1
let booleanIsloggedIn=Boolean(isloggedIn)
console.log(booleanIsloggedIn)


//1=>true
// 0 => false
//""=>false
//"nukta"=> true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);