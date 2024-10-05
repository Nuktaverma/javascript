// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

//dates

// let myDate= new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);           //object


// let myCreatedDate= new Date(2023,0,23)
// console.log(myCreatedDate.toDateString());  //Mon Jan 23 2023

// let createdDate= new Date(2023,0,23,5,3)
// console.log(createdDate.toLocaleString());   //23/1/2023, 5:03:00 am

// let createdDate1= new Date("01-14-2023")
// console.log(createdDate.toLocaleString()); 



//TIME STAMP
//let myTimeStamp= Date.now()

//console.log(myTimeStamp);   //1728141469059

//console.log(createdDate1.getTime());   //1673634600000



let newDate=new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long",

})