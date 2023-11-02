const lessonsTab = document.querySelector('.videos');
const workoutTab = document.querySelector('.workout');
const lessonsBtn = document.querySelector('.videos-btn');
const workoutBtn = document.querySelector('.workout-btn');

// Opens the workout tab
workoutBtn.addEventListener('click', function () {
    lessonsTab.classList.add('hidden');
    workoutTab.classList.remove('hidden');
});

// Opens the lessons tab
lessonsBtn.addEventListener('click', function () {
    workoutTab.classList.add('hidden');
    lessonsTab.classList.remove('hidden');
});