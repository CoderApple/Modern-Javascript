// callback and foreach

const myFunc = (callbackFunc) => {
    // do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    // do something
    console.log(value);
});




let people = ['mario', 'luigi', 'shaun', 'ryu', 'chun-li'];

const LogPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(LogPerson);