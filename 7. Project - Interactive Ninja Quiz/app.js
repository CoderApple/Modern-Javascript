const correctAnswers = ['B', 'A', 'A', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // check answers
    userAnswers.forEach((answers, index) => {
        if (answers === correctAnswers[index]) {
            score += 25;
        }
    });
    
    // show result
    scrollTo(0,0);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        if (output == score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});

// window object (global object)

// console.log('hello');
// window.console.log('hello');

// console.log(document.querySelector('.quiz-form'));
// console.log(window.document.querySelector('.quiz-form'));

// alert('hello');
// window.alert('hello');

// setTimeout(() => {
//     alert('hello');
// }, 3000)

// setInterval(() =>{
//     console.log('hello');
// }, 1000);

// let i = 0;
// const timer = setInterval(() => {
//     console.log('hello');
//     i++;
//     if(i == 5){
//         clearInterval(timer);
//     }
// }, 1000);