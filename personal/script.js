'use strict'

const urgeBtn = document.querySelector('.urge-btn')
const urgeContainer = document.querySelector('.urge');

// Opens urge box
urgeBtn.addEventListener('click', function () {
    urgeContainer.classList.remove('hidden');
});