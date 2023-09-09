"use strict";

const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const open = document.querySelector('.open');
const close = document.querySelector('.close');

// Opening menu
document.querySelector('.open').addEventListener('click', function () {
    menu.classList.remove('hidden');
    overlay.classList.remove('hidden');
    open.classList.add('hidden');
});

// Closing menu
document.querySelector('.close').addEventListener('click', function () {
    menu.classList.add('hidden');
    overlay.classList.add('hidden');
    open.classList.remove('hidden');
});

// Closing by clicking overlay
document.querySelector('.overlay').addEventListener('click', function () {
    menu.classList.add('hidden');
    overlay.classList.add('hidden');
    open.classList.remove('hidden');
});