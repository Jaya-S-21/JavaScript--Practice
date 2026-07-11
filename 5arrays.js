//Array
let marks = [100,50,70,80,90];
// console.log(marks);
// console.log(marks.length);

let arr = [100, 30, "Jaya",true];
// console.log(arr);
// console.log(arr[2]);
// console.log(typeof arr);

// changing an element
// arr[1] = 90;
// console.log(arr);

//push
arr.push(90);
// arr.push("JavaScript");
// console.log(arr);

//pop
arr.pop();
// console.log(arr);

//unshift
arr.unshift(10);
arr.unshift(50);
// console.log(arr);

//shift 
arr.shift();
// console.log(arr);

//loop
let arr1 = [10,30,50,90,11];
// for (let i=0; i<arr1.length; i++) {
//     console.log(arr1[i]);
// }

// for (let num of arr1) {
//     console.log(num);
// }

//copy by reference
let arr2 = [1,2,3,4,5];
let arr3 = arr2;
arr3.push(6);
// console.log(arr3 === arr2);                       //true

const arr4 = [9,8,7,6,5];
// arr4 = [1,2,3];                                   //error
// arr4.push(4);
// console.log(arr4);

//slice & splice
const arr5 = [10,30,50,90,100];
// const arr6 = arr5.slice(2,4);
// const arr7 = arr5.splice(1,3,'Jaya',20);
// console.log(arr5);                                  //[ 10, 'Jaya, 20, 100 ]
// console.log(arr6);                                  //[ 50, 90 ]
// console.log(arr7);                                  //[ 30, 50, 90 ]

const arr8 = [10,30,50,90,100]
const arr9 = ['Jaya', 21, true];
// arr8.push(arr9);                                     //[ 10, 30, 50, 90, 100, [ 'Jaya', 21, true ] ]
// const arr10 = arr8.concat(arr9);
// console.log(arr10);
// const arr11 = [...arr8, ...arr9];
// console.log(arr11);

const names= ['alice', 'bob', 'mohit', 'charlie', 'Jaya'];
// console.log(names.toString());
// console.log(names.join(" + "));
// console.log(names.indexOf('bob'));
// console.log(names.lastIndexOf('bob'));
// console.log(names.includes('alice'));
// names.sort();
// names.reverse();
// console.log(names);

const a = [101,90,80,32,91];
// a.sort();
// console.log(a);                                                  //[ 101, 32, 80, 90, 91 ]
a.sort((a,b)=> a-b);
// console.log(a);                                                     //[ 32, 80, 90, 91, 101 ]
a.sort((a,b)=> b-a);
// console.log(a);                                                     //[ 101, 91, 90, 80, 32 ]

const b= [10,20,30,[40,50,[60,19,99],60],70];
// console.log(b[3][2][1]);
const c = b.flat(Infinity);
// console.log(c);

const d = [10,309,"Jaya",9.3,true];
d.name = "Rohit";
console.log(d);
console.log(d["1"]);