let a = 10;
let b = a;
b = 20;
console.log(a, b); // 10 20
 
// let userOne = { name: "Amaka", age: 22 };
// let userTwo = userOne;
// userTwo.age = 40;
// console.log(userOne.age); // 22

// let userOne = { name: "Amaka", age: 22, city: "Freetown"};
// let userTwo = {...userOne};
// userTwo.age = 40;
// userTwo.city = "Makeni"
// console.log(userOne.age); // 22
// console.log(userTwo.city)

let userOne = { name: "Amaka", age: 22};
let userTwo = {...userOne, city: "Freetown"};
userTwo.age = 40;
userTwo.city = "Makeni"
console.log(userTwo)
console.log(userOne.age); // 22
console.log(userTwo.city)

