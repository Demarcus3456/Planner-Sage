let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelectorAll('.main-video .title');
const menu = document.querySelector('.menu');
const openMenu = document.querySelector('.open-menu');



// Adds video to main square
listVideo.forEach(video => {
    video.onclick = () => {

        const sources = [...video.querySelectorAll('source')].map(e => e.src);

        listVideo.forEach(vid => vid.classList.remove('active'));
        video.classList.add('active');
        if (video.classList.contains('active')) {
            let src = video.sources;
            mainVideo.source = src;
        }
    }
});

// Opens menu
openMenu.addEventListener('click', function () {
    menu.classList.remove('hidden');
    openMenu.classList.toggle('hidden');
});