const para = document.querySelector('div.error');

console.log(para);

const allPara = document.querySelectorAll('p');
console.log(allPara);
// console.log(allPara[0]);

allPara.forEach(para =>{
    console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);