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