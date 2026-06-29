//primitive data type (7)
//string, number, boolean, undefined, null, bignit, symbol

//number
let a = 10;
let b = 55.23;
console.log(a, b);
console.log(typeof a);

//string
let c = "Hello Coder";
let d = 'Jaya';
console.log(c, d);
console.log(typeof d);

//boolean
let login = true;
let f = false;
console.log(login, f);
console.log(typeof f);

//undefined
let user;
//const u;       cannot be undefined  
console.log(user);
console.log(typeof user);

//bignit
let g = 4652456345631254n;
console.log(g);
console.log(typeof g);

//null
let h = null;
console.log(h);
console.log(typeof h);    //object - bug

//symbol
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1, id2);
console.log(id1 == id2);
console.log(typeof id1);