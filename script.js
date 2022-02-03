let btnAdd = document.querySelector('#add');
let btnSubtract = document.querySelector('#subtract');
let input = document.querySelector('input');


btnAdd.addEventListener('click',() => {
    input.value = parseInt(input.value)+3;

});

btnSubtract.addEventListener('click',() => {
    input.value = parseInt(input.value) -1 ;


});

let btnMultiply = document.querySelector('#multiply');
let btnDivide = document.querySelector('#divide');
let input2 = document.querySelector('input2');

btnMultiply.addEventListener('click',() => {
    input2.value = parseInt(input2.value)+22;

});

btnSubtract.addEventListener('click',() => {
    input2.value = parseInt(input2.value) -1 ;

});




