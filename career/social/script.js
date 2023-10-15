'use strict';

const lessons = document.querySelector('.container');
const start = document.querySelector('.start');
const noteBtn = document.querySelector('.note');
const notes = document.querySelector('.notes');

// Resonator Buttons
const resonatorLessons = document.querySelector('.vocal');
const partsMenu = document.querySelector('.part');
const partsItems = document.querySelector('.part-items');
const part1Btn = document.querySelector('.p-1');
const part1 = document.querySelector('.part-1');

// Starts Lessons
start.addEventListener('click', function () {
    lessons.classList.remove('hidden');
});

// Opens notes
noteBtn.addEventListener('click', function () {
    notes.classList.remove('hidden');
});

// Opens resonator section
resonatorLessons.addEventListener('click', function () {
    partsMenu.classList.remove('hidden');
    lessons.classList.add('hidden')
});

// Opens parts menu
partsMenu.addEventListener('click', function () {
    partsItems.classList.toggle('hidden');
});

// Opens part 1
part1Btn.addEventListener('click', function () {
    part1.classList.remove('hidden');
    partsItems.classList.add('hidden');
})