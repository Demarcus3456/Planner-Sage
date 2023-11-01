const part1 = document.getElementById('p-1');
const part2 = document.getElementById('p-2');
const mainVideo = document.getElementById('main-video');

// Video list
part1.addEventListener('click', function () {
    mainVideo.src = 'https://www.dropbox.com/s/l1y0o6cn7nx20c5/1.%20Introduction%20to%20Gym%20Unleashed.mp4?raw=1';
    if (mainVideo.src = 'https://www.dropbox.com/s/l1y0o6cn7nx20c5/1.%20Introduction%20to%20Gym%20Unleashed.mp4?raw=1') {
        part1.classList.add('active');
        part2.classList.remove('active');
    }
});

part2.addEventListener('click', function () {
    mainVideo.src = 'https://www.dropbox.com/scl/fi/aaqg26a7ohx3e78e92mv8/2.-Anatomy.mp4?rlkey=gm8nu20vea0k8htln3m4k40mv&raw=1';
    if (mainVideo.src = 'https://www.dropbox.com/scl/fi/aaqg26a7ohx3e78e92mv8/2.-Anatomy.mp4?rlkey=gm8nu20vea0k8htln3m4k40mv&raw=1') {
        part2.classList.add('active');
        part1.classList.remove('active');
    }
});