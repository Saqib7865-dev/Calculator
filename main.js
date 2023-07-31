// Accesing DOM Elements:
const numbers = document.getElementsByClassName('number');
const screen = document.querySelector('input#screen');
const clearBtn = document.getElementsByClassName('clear')[0];
const opBtn = document.getElementsByClassName('op-btn');
const equalBtn = document.querySelector('div#equal');
var expression;

// Setting Clear Button Event Listener:
clearBtn.addEventListener('click',()=>{
    screen.value = '';
})

// Setting Number Buttons Event Listener:
for(let i=0; i<numbers.length;i++)
{
    numbers[i].addEventListener('click',()=>{
        screen.value += numbers[i].innerHTML;
    })
}

// Setting Operations Button Event Listener:
for (let i = 0; i < opBtn.length; i++) {
    opBtn[i].addEventListener("click",()=>{

        screen.value += opBtn[i].innerHTML;
    })
}

// Setting Equal Button Event Listener:
equalBtn.addEventListener("click",()=>{
    screen.value = eval(screen.value);
})