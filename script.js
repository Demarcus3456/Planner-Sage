"use strict";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://planner-73c83-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);

const goalsInDB = ref(database, 'goals');

const goals = document.querySelector('.goals');
const overlay = document.querySelector('overlay');

const todo = document.querySelector('.todo');
const todoSettings = document.querySelector('.todo-settings');
const goalBtn = document.querySelector('.add-goal');


const goalAdded = document.querySelector('.goal-added');
const goalImgInput = document.querySelector('.goal-image');
const goalNameInput = document.querySelector('.goal-name');
const goalsList = document.getElementById('goals-list');

// Creates goals
function goalListItem(item) {
    let itemID = item[0]
    let itemValue = item[1]

    let listItem = document.createElement("li");
    let listDiv = document.createElement("div");
    let listDiv2 = document.createElement("div");
    let name = document.createElement("h2");
    let imgValue = document.createElement("img");
    let taskBtn = document.createElement("button");
    let percentDiv = document.createElement("div");
    let percent = document.createElement("span");
    let removeItem = document.createElement("button");

    listDiv.classList.add('tasks');
    listDiv2.classList.add('task');
    imgValue.classList.add('goal-img');
    percentDiv.classList.add('progress');
    removeItem.classList.add("delete");
    taskBtn.classList.add('add-habit');

    name.textContent = itemValue;
    percent.textContent = 0 + '%';
    taskBtn.textContent = 'Tasks';
    removeItem.textContent = 'Delete';

    listDiv2.appendChild(name);
    listDiv2.appendChild(imgValue);
    listDiv2.appendChild(taskBtn);
    listDiv2.appendChild(percentDiv);
    percentDiv.appendChild(percent);
    listDiv2.appendChild(removeItem);
    listDiv.appendChild(listDiv2);
    listItem.appendChild(listDiv);
    goalsList.append(listItem);

    removeItem.addEventListener("click", function () {
        let exactLocationOfItemInDB = ref(database, `goals/${itemID}`)

        remove(exactLocationOfItemInDB);
    });
};

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

    push(goalsInDB, userInputValue);

    goalNameInput.value = '';
});

// Shows goals on page
onValue(goalsInDB, function (snapshot) {
    let goalsArray = Object.entries(snapshot.val())

    goalsList.innerHTML = '';

    for (let i = 0; i < goalsArray.length; i++) {
        let currentItem = goalsArray[i];
        let currentItemID = currentItem[0];
        let currentItemVaule = currentItem[1];

        goalListItem(currentItem);
    }
});
