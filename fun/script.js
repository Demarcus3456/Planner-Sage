'use strict'

const menu = document.querySelector('.menu');
const navBar = document.querySelector('.navbar');
const cardFront = document.querySelector('.layout');
const cardBack = document.querySelector('.card-back');
const info = document.querySelector('.info');

// Opens menu

menu.addEventListener('click', function () {
    navBar.classList.remove('hidden');
});

// Card flip

info.addEventListener('click', function () {
    cardFront.classList.add('rotate');
    cardBack.classList.remove('rotate');
    cardFront.classList.add('trastion');
    cardBack.classList.add('trastion');
})