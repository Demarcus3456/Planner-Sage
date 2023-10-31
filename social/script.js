'use strict';

const noteBtn = document.querySelector('.note');
const notes = document.querySelector('.notes');


// Opens notes
noteBtn.addEventListener('click', function () {
    notes.classList.toggle('hidden');
});

// Resonator
const resonatorLessons = document.querySelector('.vocal');
const partsMenu = document.querySelector('.part');
const partsItems = document.querySelector('.part-items');
const part1Btn = document.querySelector('.p-1');
const part1 = document.querySelector('.part-1');

// Opens resonator section
resonatorLessons.addEventListener('click', function () {
    partsMenu.classList.remove('hidden');
    lessons.classList.add('hidden');
});

// Opens parts menu
partsMenu.addEventListener('click', function () {
    partsItems.classList.toggle('hidden');
});

// Opens part 1
part1Btn.addEventListener('click', function () {
    part1.classList.remove('hidden');
    partsItems.classList.add('hidden');
});

// Social Freedom
const unleashed = document.querySelector('.free');
const freedomPage = document.querySelector('.freedom');

// Opens page
unleashed.addEventListener('click', function () {
    freedomPage.classList.remove('hidden');
    lessons.classList.add('hidden');

});