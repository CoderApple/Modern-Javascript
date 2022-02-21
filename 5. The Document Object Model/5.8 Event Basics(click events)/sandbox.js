const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('you clicked me');
// });

const li = document.querySelectorAll('li');

li.forEach(content =>{
    content.addEventListener('click', e =>{
        e.target.style.textDecoration = 'line-through';
    });
});