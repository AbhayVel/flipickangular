console.log("abhay");


var arr=[1,8,9, 7,78,23]
 

arr.sort(function(a,b){
    return a> b ? 1: -1;
})

// console.log("let of");
// for(var a of arr){
//     console.log(a);
// }

var obj ={
    id: 1,
    name: "QuickITdotNet"
}

console.log(obj.name);
console.log(obj["name"]);
var key="name";
console.log(obj[key]);