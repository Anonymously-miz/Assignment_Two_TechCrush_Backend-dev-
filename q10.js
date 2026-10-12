const totalSeconds = 98765;

const days = Math.floor(totalSeconds / (24 * 60 * 60));
const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
const seconds = totalSeconds % 60;

console.log(`${days} day, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
console.log("##########################################################")
//Q10B
// Shop total calculator
let total = 0;
// add three item prices
total += 19.99;
console.log(`After adding item 1: $${total.toFixed(2)}`);
total += 5.5;
console.log(`After adding item 2: $${total.toFixed(2)}`);
total += 3.25;
console.log(`After adding item 3: $${total.toFixed(2)}`);
// apply 10% discount
total *= 0.9;
console.log(`After 10% discount: $${total.toFixed(2)}`);
// add 7.5% VAT
total *= 1.075;
console.log(`After 7.5% VAT: $${total.toFixed(2)}`);
// split between 3 people
total /= 3;
console.log(`Each person pays: $${total.toFixed(2)}`);

console.log("########################################################")
//Q10C
let x = 5;
x++;
console.log(`After x++: ${x}`); // expected 6
x **= 2;
console.log(`After x **= 2: ${x}`); // expected 36
x %= 7;
console.log(`After x %= 7: ${x}`); // expected 1
x -= 1;
console.log(`After x -= 1: ${x}`); // expected 0
