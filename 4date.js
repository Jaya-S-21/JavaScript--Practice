const now = new Date();
console.log(now);
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());

console.log(now.getDay());                              //Mon=1, Tues=2....
console.log(now.getDate());
console.log(now.getFullYear());
console.log(now.getMonth());                            //Jan=0, Feb=1, Mar=2.....
console.log(now.getHours());
console.log(now.getSeconds());

// new Date(year, month, day, hours, minutes, seconds, ms)
const now1 = new Date(2026,6,7,22,25,16,125);
console.log(now1);                                          //will show time -(5:30)
console.log(now1.toString());                               //will show date & time accor to now1

//Timestamp
const now2 = Date.now();
console.log(now2);                                            //1783530211502
const dates = new Date(1783530211502);
console.log(dates.toString());

const dates1 = new Date(0);
console.log(dates1.toString());