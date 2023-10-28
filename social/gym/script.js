const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');



// Adds video to main square
let videoList = document.querySelectorAll('.video-list .vid');

videoList.forEach(vid => {
    vid.onclick = () => {
        videoList.forEach(remove => { remove.classList.remove('active') });
        vid.classList.add('active');

    };
});

// Opens menu
openMenu.addEventListener('click', function () {
    menu.classList.remove('hidden');
    openMenu.classList.toggle('hidden');
});