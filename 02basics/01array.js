// ARRAY
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4)

//console.log(myArr[0]);


//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)

//myArr.shift()

//console.log(myArr.includes(9)); //false
//console.log(myArr.indexOf(9));   //-1


const newArr=myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);



//SLICE, SPLICE

console.log("A ",myArr);

const myn1=myArr.slice(1,3)
console.log("B ",myArr); // array after slice(remains same)
console.log(myn1);  //sliced portion (does not include end range  if 1,3 it includes first and second element only)


const myn2=myArr.splice(1,3)
console.log("C ",myArr); // array after splice (elements spliced are removed )
console.log(myn2); //spliced portion (if 1,3 first, second, third element will be printed)

