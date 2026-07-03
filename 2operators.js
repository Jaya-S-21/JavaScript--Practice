//operators
//arithematic
console.log(2+5);
console.log(2-5);
console.log(2*5);
console.log(6/2);
console.log(5%2);             //remainder
console.log(5**2);

//assignment operator
let x =10;
let y = 20;
x+=y;
//x-=y;
//x*=y;
//x/=y;
//x%=y;
//x**=y;
console.log(x);

//comparison operators
let a = 10;
let b = "10";
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a===b);

//conversion
let c ="10021"
let d= Number (c);
console.log( d);            

let e ="102js"
let f= Number (e);
console.log( f);             //NaN : Not a Number (type - number)

console.log(0/0);            //NaN

let g = 10;
let h = String(g);
console.log(typeof h);

//console.log(Number(true));            //1
//console.log(Number(false));           //0
//console.log(Number(null));            //0
//console.log(Number(undefined));       //NaN

//console.log(typeof String(true));           //string
//console.log(String(false));                 //false 
//console.log(String(null));                  //null 
//console.log(String(undefined));             //undefined

//console.log(Boolean(10));                    //true for +ve no.
//console.log(Boolean(-10));                   //true for -ve no.
//console.log(Boolean(0));                     //false for 0
//console.log(Boolean("Hello"));               //true for string
//console.log(Boolean(""));                    //false for empty string
//console.log(Boolean(null));                  //false 
//console.log(Boolean(undefined));             //false
//console.log(Boolean([]));                    //true (array)
//console.log(Boolean({}));                    //true (object)

//computer science challenge
let i = "0.1";
let j = "0.2";
let k = i + j;
//console.log (k == 0.3);             //false
//console.log (k);                    //0.30000000000000004

let postfix = 6;
let prefix = 6;
//console.log(postfix++);
//console.log(postfix);
//console.log(++prefix);
//console.log(prefix);
 
//console.log("Rohit" > "Mohit");              //true
//console.log("Rohit" > "mohit");              //false

//console.log(10>="10");                     //true
//console.log(null>="");                     //true
//console.log(null == "");                   //false because null is losely equal to undefined rest is false

console.log(null==undefined);                //true -- special case
console.log(NaN===NaN);                      //false