let ninjas = ['shaun', 'ryu', 'chun-li'];

ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['shaun', 'crystal', 30, 20];
console.log(random);

console.log(ninjas.length);

// array methods
let result = ninjas.join(',');
console.log(result);

result = ninjas.indexOf('chun-li');
console.log(result);

result = ninjas.concat(['ryu', 'crystal']);
console.log(result);

result = ninjas.push('ryu');
result = ninjas.pop();
console.log(result);
