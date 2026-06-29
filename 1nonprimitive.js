//non- primitive data type
//array, object, function

//array
let arr = [10,20,30,"Jaya",true]
console.log(arr);
console.log(typeof arr);       //object - not bug

//object
let obj = {
    name:"Jaya",
    account:"123120",
    age:25,
    category:"gen"
}
console.log(obj);
console.log(typeof obj);

//function
function hello() {
    console.log("Hello Everyone!!!");
}
hello();
//console.log(typeof hello());

//can be called in variables
let f = function name() {
    console.log("Jaya")
}
console.log(f);
f();
console.log(typeof f);           //function but actually object

//mutable
let a = [10,20,30,40];
a.push(100);
a[0] = 200;
console.log(a);

let o = {name: "Mohan", age: 20};
o.name = "Rohan";
console.log(o);