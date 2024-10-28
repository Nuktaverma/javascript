const coding=["js","ruby","java","python","cpp"]



coding.forEach( function (val){   // forEach(andar aata hai callback function ) call back function ko name nhi dete koi just write funcion and it will auto matically see each element
    //console.log(val);
} )

coding.forEach( (item)=>{
    //console.log(item);
    
} )

function printMe(item){
    console.log(item);
}

//coding.forEach(printMe)

coding.forEach( (item, index, arr)=>{
    //console.log(item, index, arr);
} )

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languageName);
} )

