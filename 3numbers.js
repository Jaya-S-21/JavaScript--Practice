//number
let a = 10;
let b = 3.145672;
let e = b.toFixed(4)
console.log(e);                                         //3.1456
console.log(typeof e);                                  //string
console.log(typeof b.toPrecision(4));                   //string //3.145
console.log(b.toString());

let c = new Number(20);
let d = new Number(20);
console.log(c == d);                                    //false
//console.log(typeof c);                                //object
console.log(Boolean(new Number(0)));                    //true

console.log(Math.abs(-4));
console.log(Math.PI); 
console.log(Math.LN10); 
console.log(Math.LN2); 
console.log(Math.LOG10E); 
console.log(Math.LOG2E); 
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);  
console.log(Math.ceil(2.3));
console.log(Math.floor(2.3));
console.log(Math.log10(20));
console.log(Math.max(20,3,25,64,85,92,1,2,65)); 

console.log(Math.random());
//[0,1): It will generate value between 0 and 1, where 0 is included but 1 is not

console.log(Math.floor(Math.random()*10));
//to generate numbers between 0 - 9

// console.log(Math.ceil(Math.random()*10));
console.log(Math.floor(Math.random()*10)+1);
// to generate numbers between 1 - 10

console.log(Math.floor(Math.random()*6)+1);
// to generate numbers between 1 - 6

console.log(Math.floor(Math.random()*11)+15);
//to generate number between 15 - 25

//to generate OTP 4 digits : 1000 - 9999
console.log(Math.floor(Math.random()*(9999-1000+1))+1000); 
//but we don't use this because the user can guess the pattern of this and can guess the next otp value which can lead to harm

