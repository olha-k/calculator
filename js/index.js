const display = document.querySelector('.calculator .display'); 

document.querySelectorAll ('.digits button')
    .forEach( digit => digit.addEventListener('click', digitPressed));

function digitPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelectorAll ('.operator')
    .forEach( operator => operator.addEventListener('click', operatorPressed));

function operatorPressed(ev) {
    display.value += ev.target.innerText;
}

document.querySelector('.equal').addEventListener ('click', equalPressed); 

function equalPressed() {
    display.value = eval(display.value);
}

document.querySelector('.decimal').addEventListener('click', decimalPressed);

function decimalPressed(dot) {
    if (display.value.includes('.')) {
        display.value += '';
    } else
     display.value += dot.target.innerText;
}

document.querySelector('.clear').addEventListener ('click', clearAll); 

function clearAll() {
    display.value = ' ';
}
