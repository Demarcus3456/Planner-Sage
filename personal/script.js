'use strict'

const urgeBtn = document.querySelector('.urge-btn')
const urgeContainer = document.querySelector('.urge');
const counter = document.querySelector('.counter');
const back = document.querySelector('.x');

// Opens urge box
urgeBtn.addEventListener('click', function () {
    urgeContainer.classList.remove('hidden');
    counter.classList.add('hidden');
});

// Closes urge box
back.addEventListener('click', function () {
    urgeContainer.classList.add('hidden');
    counter.classList.remove('hidden');
});

// Timer
var sec = 0;
function pad(val) { return val > 9 ? val : "0" + val; }
setInterval(function () {
    document.getElementById("seconds").innerHTML = pad(++sec % 60);
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
    document.getElementById('hours').innerHTML = pad();
    document.getElementById('days').innerHTML = pad();
}, 1000);