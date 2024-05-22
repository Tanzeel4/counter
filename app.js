const title = document.querySelector('.num')
let curvalue = 0;

const buttondecrease = document.querySelector('#decrement');
const buttonreset = document.querySelector('#reset');
const buttonincrease = document.querySelector('#increment');

buttonincrease.addEventListener("click" , () => {
    curvalue++;
title.textContent = curvalue;

});

buttondecrease.addEventListener("click" , () => {
    curvalue--;
title.textContent = curvalue;

});

buttonreset.addEventListener("click" , () => {
    curvalue = 0;
title.textContent = curvalue;

});


