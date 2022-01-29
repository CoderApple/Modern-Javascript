// variables and block scope
let age = 30;

if (true) {
    let age = 40;
    let name = 'shaun';
    console.log('inside code block: ', age, name);
}

console.log('outside code block: ', age, name);