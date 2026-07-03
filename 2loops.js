//for loop
for (let i=0; i<5; i++) {
    console.log(i);
}

//while loop
let j=5;
while (j<10) {
    console.log(j);
    j++;
}

//do while
let k =10;
do{
    console.log(k);
    k++;
}while(k<15);

//if else condition
let age = 21;
if(age>=18) {
    console.log("Eligible for vote");
}
else {
    console.log("You are not eligible for vote!!!")
}

//kid young & old
let a = 25;
if (a<18) {
    console.log("Kid");
}
else if (a >= 60) {
    console.log("Old");
} 
else {
    console.log("Young");
}

// logical operator - &&, ||
// console.log(false&&false);
// console.log(true&&false);
// console.log(false&&true);
// console.log(true&&true);
// console.log(false||false);
// console.log(true||false);
// console.log(false||true);
// console.log(true||true);

let m ="Rohit";
let n = "Mohit";
let o = m &&n;
console.log(o);                 //Mohit

let e= 0;
let f= 20;
console.log(e && f);            //0 (false)

//&&: if first value is true, it will return second value
// if first value is false, it will return first value itself

let q ="Rohit";
let r = "Mohit";
console.log(q || r);             //Rohit

let u= 0;
let v= 20;
console.log(u || v);             //20

//||: if first value is true, it will return first value only
// if first value is false it will return second value 

console.log(4!=5);