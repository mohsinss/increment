let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('input');
let btnMultiply = document.querySelector('#multiply');
let btnDivide = document.querySelector('#divide');


btnAdd.addEventListener('click',() => {
    input.value = parseInt(input.value)+3;

});

btnSubtract.addEventListener('click',() => {
    input.value = parseInt(input.value) -1 ;


});


btnMultiply.addEventListener('click',() => {
    input.value = parseInt(input.value)*2;

});

btnSubtract.addEventListener('click',() => {
    input.value = parseInt(input.value) /2 ;

});


