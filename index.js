//Basic calculation functions

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

function operate(a,b,o){
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