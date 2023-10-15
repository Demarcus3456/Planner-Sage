'use strict';

const lessons = document.querySelector('.lessons');

// Resonator Buttons
const resonatorLessons = document.querySelector('.vocal');
const partsMenu = document.querySelector('.part');
const partsItems = document.querySelector('.part-items');
const part1Btn = document.querySelector('.p-1');
const part1 = document.querySelector('.part-1');

// Opens resonator section
resonatorLessons.addEventListener('click', function () {
    partsMenu.classList.remove('hidden');
    lessons.classList.add('hidden')
});

// Opens parts menu
partsMenu.addEventListener('click', function () {
    partsItems.classList.remove('hidden');
});

// Opens part 1
part1Btn.addEventListener('click', function () {
    part1.classList.remove('hidden');
})