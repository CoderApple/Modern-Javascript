// strings
console.log('hello');

let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
let firstname = 'Brandon';
let lastname = 'Sanderson';

let fullname = firstname + ' ' + lastname;
console.log(fullname);

// getting characters
console.log(fullname[2]);

// string length
console.log(fullname.length);

// string methods
console.log(fullname.toUpperCase());
let result = fullname.toLowerCase();
console.log(result, fullname);

let index = email.indexOf('@');
console.log(index);

// commmon string methods
result = email.lastIndexOf('n');
console.log(result);

result = email.slice(0, 5);
console.log(result);

result = email.substring(4, 10);
console.log(result);

result = email.replace('m', 'w');
console.log(result);
