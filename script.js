"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://planner-73c83-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);

const goalsInDB = ref(database, 'goals')


const menu = document.querySelector('.menu');
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const goals = document.querySelector('.goals');

const todo = document.querySelector('.todo');
const todoSettings = document.querySelector('.todo-settings');
const goalBtn = document.querySelector('.add-goal');

const goalImg = document.querySelector('.goal-image');
const goalAdded = document.querySelector('.goal-added');
const goalNameInput = document.querySelector('.goal-name');

const goalsList = document.getElementById('goals-list');


function goalListItem(item) {
    goalsList.innerHTML += `
    <li>
        <div class="tasks">
            <div class="task">
                <h2>${item}</h2>
                <img src='$}' class='goal-img'>
                <button>Tasks</button>
                <div class="progress  completion-bar">      
                <span>0</span>%
                </div>
            </div>
        </div>
    </li>`

}



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
    todo.classList.remove('hidden');
});

// Open add goal settings
goalBtn.addEventListener('click', function () {
    todoSettings.classList.remove('hidden');
    todo.classList.add('hidden');
});

// Adds the goal to goal list
goalAdded.addEventListener('click', function () {
    todoSettings.classList.add('hidden');

    const userInputValue = goalNameInput.value;

    /* const userImgValue = goalImg.value; */

    push(goalsInDB, userInputValue);
});

onValue(goalsInDB, function (snapshot) {
    let goalsArray = Object.values(snapshot.val())

    goalsList.innerHTML = '';

    for (let i = 0; i < goalsArray.length; i++) {
        goalListItem(goalsArray[i]);
    }
});
