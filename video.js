//Получаем объекты
//Плеер
let videoPlayer = document.querySelector('#videoPlayer');
//Время
let progressBar = document.querySelector('#video-hud__progress-bar');
let currTime = document.querySelector('#video-hud__curr-time');
let durationTime = document.querySelector('#video-hud__duration');
//Кнопки
let actionButton = document.querySelector('#video-hud__action');
let muteButton = document.querySelector('#video-hud__mute');
let volumeScale = document.querySelector('#video-hud__volume');
let playVideo = document.querySelector('#play')

//Запускаем или ставим на паузу
function videoAct() {
    if(videoPlayer.paused) {
        videoPlayer.play();
        actionButton.setAttribute('class','play fas fa-pause');
        playVideo.style.display = 'none'
    } else {
        videoPlayer.pause();
        actionButton.setAttribute('class','play fas fa-play');
        playVideo.style.display = 'block'
    }
    if(durationTime.innerHTML === '00:00') {
        durationTime.innerHTML = videoTime(videoPlayer.duration); //Об этой функции чуть ниже
    }
}

//Запуск, пауза
actionButton.addEventListener('click',videoAct); //нажатие на кнопку панели контроля
videoPlayer.addEventListener('click',videoAct); //нажатие на сам экран плеера
playVideo.addEventListener('click', videoAct);

//Рассчитываем время в секундах и минутах
function videoTime(time) {
    time = Math.floor(time);
    let minutes = Math.floor(time / 60);
    let seconds = Math.floor(time - minutes * 60);
    let minutesVal = minutes;
    let secondsVal = seconds;
    if(minutes < 10) {
        minutesVal = '0' + minutes;
    }
    if(seconds < 10) {
        secondsVal = '0' + seconds;
    }
    return minutesVal + ':' + secondsVal;
}

//Отображаем время воспроизведения
function videoProgress() {
    let progress = (Math.floor(videoPlayer.currentTime) / (Math.floor(videoPlayer.duration) / 100));
    progressBar.value = progress;
    progressBar.style.background = `-webkit-linear-gradient(left, #BDAE82 0%, #BDAE82 ${progress}%, #fff ${progress}%, #fff 0%)`
    currTime.innerHTML = videoTime(videoPlayer.currentTime);
}

//Перематываем
function videoChangeTime(e) {
    let mouseX = Math.floor(e.pageX - progressBar.offsetLeft);
    let progress = mouseX / (progressBar.offsetWidth / 100);
    videoPlayer.currentTime = videoPlayer.duration * (progress / 100);
}

//Отображение времени
videoPlayer.addEventListener('timeupdate',videoProgress);
//Перемотка
progressBar.addEventListener('click',videoChangeTime);

function range() {
    let value = progressBar.value
    progressBar.style.background = `-webkit-linear-gradient(left, #BDAE82 0%, #BDAE82 ${value}%, #fff ${value}%, #fff 0%)`
}

function rangeVolume() {
    let value = volumeScale.value
    volumeScale.style.background = `-webkit-linear-gradient(left, #BDAE82 0%, #BDAE82 ${value}%, #fff ${value}%, #fff 0%)`
}

//Меняем громкость
function videoChangeVolume() {
    let volume = volumeScale.value / 100;
    videoPlayer.volume = volume;
}

//Убираем звук
function videoMute() {
    if(videoPlayer.volume === 0) {
        let value = volumeScale.value;
        videoPlayer.volume = volumeScale.value / 100;
        muteButton.setAttribute('class','sound fas fa-volume-up');
        volumeScale.setAttribute('class', 'video-hud__element range__audio')
        volumeScale.style.background = `-webkit-linear-gradient(left, #BDAE82 0%, #BDAE82 ${value}%, #fff ${value}%, #fff 0%)`
    } else {
        videoPlayer.volume = 0;
        volumeScale.setAttribute('class','video-hud__element_after range__audio');
        muteButton.setAttribute('class','sound fas fa-volume-mute');
        volumeScale.style.background = `-webkit-linear-gradient(left, #BDAE82 0%, #BDAE82 0%, #fff 0%, #fff 0%)`
    }
}

//Звук
muteButton.addEventListener('click',videoMute);
volumeScale.addEventListener('change',videoChangeVolume);
