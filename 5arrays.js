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
// console.log(arr3 === arr2);

const arr4 = [9,8,7,6,5];
// arr4 = [1,2,3];                                  //error
// arr4.push(4);
// console.log(arr4);

const arr5 = [10,30,50,90,100];
const arr6 = arr5.slice(2,4);
const arr7 = arr5.splice(1,3);
console.log(arr5);                                  //[ 10, 100 ]
console.log(arr6);                                  //[ 50, 90 ]
console.log(arr7);                                  //[ 30, 50, 90 ]