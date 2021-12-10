// slider : https://roundsliderui.com/document.html
$("#time_slider").roundSlider({
    sliderType: "min-range",
    handleShape: "round",
    width: 22,
    radius: 294,
    value: 0,
    startAngle:180,
    showTooltip: false,
    editableTooltip: false,
    svgMode: true,
    update: function (params) {
        audioTrack.currentTime = (params.value * audioTrack.duration) / 100;
        console.log(params.value);
    }
});

// list:
// 
let audioPlayer = document.querySelector("#audioplayer");
let audioTrack = document.querySelector("#audiotrack");
// buttons
let playButton = document.querySelector("#play_button");
let pauseButton = document.querySelector("#pause_button");
pauseButton.setAttribute("class", "display_button");
let nextSong = document.querySelector("#for_button");
let prevSong = document.querySelector("#back_button");
let playHead = document.querySelector("#time>span");
// timer
let contTimePlay = document.querySelector("#time")
let timePlayer = document.querySelector("#time_slayder");
let timeMax = document.querySelector("#time_max>span");
let contTimeMax = document.querySelector("#time_max");
let timeSlider = document.querySelector(".rs-handle");

let nameAndTrack = document.querySelector(".name_and_track");

let numTrack = 0;
let choiceTrig = document.querySelector('#time_slider>input');
let power = document.querySelector("#power");
let magic = document.querySelector("#gameButton");
let positionCurVol =document.querySelector("#fader");

// load first song
let songIndex = 0;

// play
playButton.addEventListener("click", player);
function player() {
    pauseButton.setAttribute("class", "dock-icon");
    pauseButton.classList.add("forward_player");
    playButton.setAttribute("class", "dock-icon");
    playButton.classList.add("display_button");
    audioTrack.play();
}
// stop
pauseButton.addEventListener("click", stopper);
function stopper() {
    playButton.setAttribute("class", "dock-icon");
    playButton.classList.add("forward_player");
    pauseButton.setAttribute("class", "dock-icon");
    pauseButton.classList.add("display_button");

    audioTrack.pause();
}
// load sound
let volumeSlider = document.querySelector("#volumeSlider");
let currentVolume= document.querySelector("#current_volume");
volumeSlider.addEventListener("input", function () {
    audioTrack.volume = volumeSlider.value;
    console.log(volumeSlider.value);
    currentVolume.textContent=parseInt(volumeSlider.value*100)+"%";
    currentVolume.setAttribute("style",`transform: translateX(${((volumeSlider.value*100)-50)*2}px)`);

    if((volumeSlider.value*100)==100){
        currentVolume.setAttribute("style",`transform: translateX(124px)`);
    }
    else if((volumeSlider.value*100)==0){
        currentVolume.setAttribute("style",`transform: translateX(-116px)`);
    }
});
// end for, button change
audioTrack.addEventListener('ended', finish);
function finish() {
    audioTrack.currentTime = 0;
    stopper();
}
// timer update
function updatePlayhead() {

    playHead.value = audioTrack.currentTime;
    let mls = parseInt((audioTrack.currentTime * 100) % 100);
    let s = parseInt(audioTrack.currentTime % 60);
    let m = parseInt((audioTrack.currentTime / 60) % 60);
    mls = (mls >= 10) ? mls : "0" + mls;
    s = (s >= 10) ? s : "0" + s;
    m = (m >= 10) ? m : "0" + m;
    playHead.textContent = m + ':' + s + ':' + mls;
}

function progressionTime() {
    let timeSlider = ((audioTrack.currentTime) / audioTrack.duration) * 360;
    let timeProg = audioTrack.currentTime * 100 / audioTrack.duration;
    let timeblue = timeProg * 1771 / 100;

    $("#time_slider").attr("class", `rs-firefox rs-control rs-svg-mode`);
    $(".rs-bar").attr("style", `transform: rotate(${timeSlider+180}deg)`);
    $(".rs-handle").attr("aria-valuenow", timeProg);
    $(".rs-range").attr("style", `stroke-dasharray: 0px, 0px, ${timeblue}px, 1771.86px;`);

}
// listen and reset timer
audioTrack.addEventListener('timeupdate', () => {
    updatePlayhead();
    progressionTime();
})

// next song

const songsLoader = ['AC-DC - Powerage - 07 - Gone Shootin',
    'Airbourne - Bottom Of The Well',
    'Track 07-Hayseed Dixie-Have a Drink on Me',
    '01 - Stargate SG-1 Main Title',
    '18 Flogging Molly _ Seven deadly sins',
    'Imogen heap - Between Sheets',
    'Zelda - Ocarina Of Time - Gerudo Valley (Orchestrated)'];

// timer max song
audioTrack.duration = "";
function timerSetOver() {
    timeMax.value = audioTrack.duration;
    let timerOver = audioTrack.duration;
    let milsec = parseInt((timerOver * 100) % 100);
    let sec = parseInt(timerOver % 60);
    let min = parseInt((timerOver / 60) % 60);
    milsec = (milsec >= 10) ? milsec : "0" + milsec;
    sec = (sec >= 10) ? sec : "0" + sec;
    min = (min >= 10) ? min : "0" + min;
    timeMax.textContent = min + ':' + sec+ ':' + milsec;

}
audioTrack.addEventListener('playing', timerSetOver)
// end timer max



loadSong(songsLoader[songIndex]);

function loadSong(song) {
    audioTrack.src = `sound/${song}.mp3`;
    audioPlayer.style.backgroundImage = `url('image/${song}.jpg')`;
};

// click for next song
nextSong.addEventListener('click', dropNext)
function dropNext() {
    songIndex++;
    if (songIndex > 6) {
        songIndex = 0;
    }
    loadSong(songsLoader[songIndex]);
    player();

};
// click for prev song
prevSong.addEventListener('click', dropPrev)
function dropPrev() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = 0;
    }
    loadSong(songsLoader[songIndex]);
    player();

};
// magic catch eyes on buttons
power.addEventListener("mouseover", () => {
    magic.setAttribute("class", "dock-wrapper");
    contTimePlay.classList.remove("appear");
    contTimeMax.classList.remove("appear");
    positionCurVol.classList.remove("appear");
}, false)

power.addEventListener("mouseout", () => {
    magic.classList.add("appear");
    contTimePlay.classList.add("appear");
    contTimeMax.classList.add("appear");
    positionCurVol.classList.add("appear");
}, false)

// clock time
setInterval(setClock, 100)
const timeHand = document.querySelector('[data-time-hand]')
function setClock() {
    const currentTime = audioTrack.currentTime / audioTrack.duration
    setRotation(timeHand, currentTime)
}
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360 + 90)
}
setClock();
// end field

// json and fetch:
// function next song

function catchNext(jsonSong) {
    let catchTrack = jsonSong.song[numTrack];
    nameAndTrack.textContent = catchTrack.titre + " - " + catchTrack.groupe + " - " + catchTrack.piste;
};
// insert json:
let myInit = {
    method: 'POST',
};
let p = fetch('https://baudino.needemand.com/json/sound.php', myInit)
    .then(function (response) {
        response.json()
            .then(function (contenu) {
                playButton.addEventListener('click', e => {
                    numTrack;
                    catchNext(contenu)
                })
                nextSong.addEventListener('click', e => {
                    numTrack++;

                    if (numTrack > 6) {
                        numTrack = 0
                    }
                    catchNext(contenu)
                })
                prevSong.addEventListener('click', e => {
                    numTrack--;

                    if (numTrack < 0) {
                        numTrack = 0
                    }
                    catchNext(contenu)
                })

            })
    });


