const before = new Date('February 1 2022 7:30:59');
const now = new Date();

// console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);

console.log(`the blog was written ${days} days ${hours} hours ${mins} minutes ago`);


// converting time stamps into date objects
const timestamps = 156548416129;
console.log(new Date(timestamps));