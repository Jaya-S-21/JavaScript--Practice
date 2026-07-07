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

let billion = 5e9;
let tiny = 5e-6;
console.log(billion);
console.log(tiny);

let hex = 0xFF;
let binary = 0b1010;
let oct = 0o77;
console.log(hex, binary, oct);

console.log(1 / 0);                  // Infinity
console.log(-1 / 0);                 // -Infinity
console.log(0/0);                    // NaN
console.log(typeof NaN);             // number

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.EPSILON);

isNaN("blue");                                      // true (coerces "blue" to NaN)
console.log(Number.isNaN("blue"));                  // false (it's a string, not NaN)

let result = 0 / 0;                                 // result is NaN
isNaN(result);                                      // true
console.log(Number.isNaN(result));                  // true
