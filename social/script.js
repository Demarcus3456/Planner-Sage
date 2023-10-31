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
const freedomMenu = document.querySelector('.f-menu');
const weeks = document.getElementById('weeks');
const week1btn = document.querySelector('.week-1-btn');
const week1 = document.querySelector('.week-1');

// Opens page
unleashed.addEventListener('click', function () {
    freedomPage.classList.remove('hidden');
    lessons.classList.add('hidden');
});

// Opens week 1 section
week1btn.addEventListener('click', function () {
    week1.classList.remove('hidden');
    weeks.style.display = 'none';
    freedomMenu.classList.remove('hidden')
});

// Opens menu
freedomMenu.addEventListener('click', function () {
    freedomMenu.classList.add('hidden');
    week1.classList.add('hidden');
    weeks.style.display = 'flex';
})