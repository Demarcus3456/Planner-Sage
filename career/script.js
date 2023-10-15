'use strict'

const navbarBtn = document.querySelector('.navbar-btn');
const navbar = document.querySelector('.navbar');

// Toggles menu
navbarBtn.addEventListener('click', function () {
    navbar.classList.toggle('hidden');
});