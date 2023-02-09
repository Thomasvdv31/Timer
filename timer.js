const startButton = document.querySelector("#startBtn");
const pauseButton = document.querySelector("#pauseBtn");
const resetButton = document.querySelector("#resetBtn");
const timerDisplay = document.querySelector("#timeDisplay");

let miliSec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let startTime = 0;
let elapsedTime = 0;
let paused = true;
let setintervalID;


startButton.addEventListener("click", () => {
    if (paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
       
        setintervalID = setInterval(updateTimer, 75);
    }
});
pauseButton.addEventListener("click", () => {
    if(paused == false){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(setintervalID);
        
    }
});
resetButton.addEventListener("click", () => {
    paused = true;
    clearInterval(setintervalID);
    miliSec = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    startTime = 0;
    currentTime = 0;
    elapsedTime = 0;
    timerDisplay.textContent = "00:00:00";
});


function updateTimer(){
    elapsedTime = Date.now() - startTime;
    
    miliSec = Math.floor((elapsedTime / 10) % 60);
    seconds = Math.floor((elapsedTime / 1000) % 60);
    minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((elapsedTime / (1000 * 60 * 60)));

    miliSecText = padZero(miliSec);
    secondsText = padZero(seconds);
    minutesText = padZero(minutes);
    hoursText = padZero(hours);
    
    timerDisplay.textContent = `${hoursText}:${minutesText}:${secondsText}:${miliSecText}`;

    function padZero(text){
        return ("0" + text).length > 2 ? text:"0"+text;
    }
}
