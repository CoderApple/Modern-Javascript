// arguments and parameters

const speak = function(name = 'mario', time = 'night') {
    console.log(`good ${time} ${name}!`);
}
speak();
speak('shaun');