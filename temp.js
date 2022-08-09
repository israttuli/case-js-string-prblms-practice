let first = 5;
let second = 8;
console.log(first, second);
// This is wrong approch
// first = second;
// second = first;
// // approch :1
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// approch: 2----Destructuring
[first, second] = [second , first];
console.log(first, second);
