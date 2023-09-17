"use strict";

const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const goals = document.querySelector('.goals');
const todo = document.querySelector('.todo');

// Opening menu
open.addEventListener('click', function () {
    menu.classList.remove('hidden');
    overlay.classList.remove('hidden');
    open.classList.add('hidden');
});

// Closing menu
close.addEventListener('click', function () {
    menu.classList.add('hidden');
    overlay.classList.add('hidden');
    open.classList.remove('hidden');
});

// Opening goals tracker
goals.addEventListener('click', function () {
    console.log(goals)
    todo.classList.remove('hidden');
});
