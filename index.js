
let a;
let b;
let o;
let displayContent;
//Basic calculation functions


const display = document.querySelector('.item-display');

//button 7
const item7 = document.querySelector('.item-7');
item7.addEventListener('click', function(){
   displayContent = display.value += '7';
   console.log(displayContent);
});

//button 8
const item8 = document.querySelector('.item-8');
item8.addEventListener('click', function(){
   displayContent = display.value += '8';
   console.log(displayContent);
});

//button 9
const item9 = document.querySelector('.item-9');
item9.addEventListener('click', function(){
   displayContent = display.value += '9';
   console.log(displayContent);
});

//button -
const itemSub = document.querySelector('.item--');
itemSub.addEventListener('click', function(){
   displayContent = display.value += '-';
   console.log(displayContent);
});

//button 4
const item4 = document.querySelector('.item-4');
item4.addEventListener('click', function(){
   displayContent = display.value += '4';
   console.log(displayContent);
});

//button 5
const item5 = document.querySelector('.item-5');
item5.addEventListener('click', function(){
   displayContent = display.value += '5';
   console.log(displayContent);
});

//button 6
const item6 = document.querySelector('.item-6');
item6.addEventListener('click', function(){
   displayContent = display.value += '6';
   console.log(displayContent);
});

//button +
const itemPlus = document.querySelector('.item-plus');
itemPlus.addEventListener('click', function(){
   displayContent = a; 
   o = '+'
   console.log(a);
});

//button 1
const item1 = document.querySelector('.item-1');
item1.addEventListener('click', function(){
   displayContent = display.value += '1';
   console.log(displayContent);
});

//button 2
const item2 = document.querySelector('.item-2');
item2.addEventListener('click', function(){
   displayContent = display.value += '2';
   console.log(displayContent);
});

//button 3
const item3 = document.querySelector('.item-3');
item3.addEventListener('click', function(){
   displayContent = display.value += '3';
   console.log(displayContent);
});

//button *
const itemMultiply = document.querySelector('.item-multiply');
itemMultiply.addEventListener('click', function(){
   displayContent = display.value += '* ';
   console.log(displayContent);
});

//button 0
const item0 = document.querySelector('.item-zero');
item0.addEventListener('click', function(){
   displayContent = display.value += '0';
   console.log(displayContent);
});

//button .
const itemDot = document.querySelector('.item-dot');
itemDot.addEventListener('click', function(){
   displayContent = display.value += '.';
   console.log(displayContent);
});

//button /
const itemDivide = document.querySelector('.item-divide');
itemDivide.addEventListener('click', function(){
   displayContent = display.value += '/ ';
   console.log(displayContent);
});

//button =
const itemEquals = document.querySelector('.item-equals');
itemEquals.addEventListener('click', function(){
   displayContent = display.value += '=';
   console.log(displayContent);
});


function getAdd(a,b){
    return a + b;
};

function subtract(a,b){
    return a - b;
};

function multiply(a,b){
    return a * b;
};

function divide(a,b){
    return a / b;
};

// Advanced functions


function operate(a,o,b){
    if (o === '+'){
        return getAdd(a,b);
    }
    else if (o === '-'){
        return subtract(a,b);
    }
    else if (o === '*'){
        return multiply(a,b);
    }
    else if(o === 'divide'){
        return divide(a,b);
    }
};
