const user = {
    "name": 'Jaya',
    age: 21,
    amount: 5000
}
// console.log(user["age"]);                                   //21
// console.log(typeof user);                                   //object

//CRUD operation: create read update delete
// user.adhar = 1234;
// console.log(user);
// user.amount = 6500;
// console.log(user);
// delete user.adhar;
// console.log(user);

//copied by reference
const user2 = user;
// user2.age = 90;
// console.log(user === user2);
// console.log(user2);

//Important
// console.log(Object.keys(user));                                  //[ 'name', 'age', 'amount' ]
// console.log(Object.values(user));                                //[ 'Jaya', 21, 5000 ]
// console.log(Object.entries(user));                               //[ [ 'name', 'Jaya' ], [ 'age', 21 ], [ 'amount', 5000 ] ]

//loop (not recomended)
// for (let keys in user) {
//     console.log(keys, user[keys]);
// }

//loop
// for (let [keys,values] of Object.entries(user)) {
//     console.log(keys,values);
// }

//Object Destructuring
// const name = user.name;
// const age = user.age;
const{name:username, age:userage} = user;
// console.log(username,userage);                                                 //Jaya 21
const arr = [10,20,30,40,50];
const[first,second] = arr;
// console.log(first,second);                                             //10 20

const user3 = {
    name: 'Jaya',
    age : 21,
    email: 'jaya@gmail.com',
    amount: 2000,
    greeting: function() {
        console.log(`Hello Everyone,I am ${this.name}`);
        return 20;
    }
}
console.log(user3);
const va = user3.greeting();
console.log(va);