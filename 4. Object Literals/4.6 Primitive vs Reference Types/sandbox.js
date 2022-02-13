// primitive values

let scoreone = 50;
let scoretwo = scoreone;

console.log(`scoreone: ${scoreone}, scoretwo: ${scoretwo}`);

scoreone = 100;
console.log(`scoreone: ${scoreone}, scoretwo: ${scoretwo}`);

// reference values

let userOne = {name: 'ryu', age: 30};
let userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 40;
console.log(userOne, userTwo);