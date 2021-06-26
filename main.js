const moreBtn = document.querySelector('.info .metadata .moreBtn');
const video = document.querySelector('.info .metadata .video');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    video.classList.toggle('clamp');
});