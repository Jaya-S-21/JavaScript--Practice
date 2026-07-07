const str1 = "Jaya";
const str2 = 'Sankhla';
const day = 21;
const str3 = `Birth Date ${day}`;                   //can use multiple lines in it
console.log(str1, str2, str3);

const str = `Hello Jaya Sankhla Jaya`;
console.log(str.length);
console.log(str[0]);

str[2] = "S";                         //immutable
console.log(str);

console.log(str.toUpperCase());
console.log(str.toLowerCase());
 
console.log(str.indexOf('Jay'));                         //6
console.log(str.indexOf('Jae'));                         //-1
console.log(str.indexOf('jay'));                         //-1 
console.log(str.lastIndexOf('Jay'));                     //19

console.log(str.includes('Jaya'));                          //true
console.log(str.includes('jaya'));                          //false

//slice
console.log(str.slice(2,6));                              //llo
console.log(str.slice(3));                                //lo Jaya Sankhla Jaya
console.log(str.slice(-4));                               //Jaya
console.log(str.slice(-6,-2));                            //a Ja

console.log(str.substring(2,6));                            //llo but no -ve string in it

const a ="Jaya";
const b ="Sankhla";
console.log(a+" "+b);

console.log(24+"Jaya");

console.log(str.replace("aya","AYA"));
console.log(str.replaceAll("aya","AYA"));

const user = " Jaya ";
console.log(user.trim());                             //Jaya

const names ="Rohit, Mohit, Suraj, Rohan, Anjali";
console.log(names.split(","));                           //names in array
