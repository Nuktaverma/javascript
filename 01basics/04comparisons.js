// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//above will give result in true or false 


console.log("2" > 1);
console.log("02" > 1);

console.log(null>0)
console.log(null==0)
console.log(null>=0);

/*
the reason is that an equality check == and comparisons <,>,<=,>= work differently
comparisons convert null to a number, treating it as 0.
that's why null>=0 is true and null>0 is false
*/



//===
console.log("2"==2);
