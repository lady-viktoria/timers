import {renderTimer} from './common.js';
import './howler.js';

var sound = new Howl({
    src: ['beep.mp3']
  });


const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');


let interval;

function startTimer(seconds) {
    stopTimer();
    let secondsToEnd = seconds;
    renderTimer(secondsToEnd)
    interval = setInterval(() => {
        renderTimer(--secondsToEnd)
        if(secondsToEnd <= 0 ){
            stopTimer();
            // alert('timer');
            sound.play();
            return;
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval);
}

startBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const seconds = document.getElementById('seconds').value;
    startTimer(+seconds);
});

stopBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    stopTimer();
});

