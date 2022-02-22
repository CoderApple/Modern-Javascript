const copy = document.querySelector('.copy-me');

copy.addEventListener('copy', () =>{
    console.log('OI! my content is copyright!');
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', e =>{
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    box.textContent = `X Pos - ${e.offsetX} Y Pos - ${e.offsetY}`;
});

document.addEventListener('wheel', e =>{
    console.log(e.pageX, e.pageY);
})