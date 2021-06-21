const calcBtn = document.getElementById('calc');
const timerBtn = document.getElementById('timer');

const calcDiv = document.getElementById('calcDate');
const timerDiv = document.getElementById('calcTime');

calcBtn.addEventListener('click', () => {
    calcDiv.classList.add('visible');
    calcDiv.classList.remove('hidden');
    timerDiv.classList.add('hidden');
    timerDiv.classList.remove('visible');
});

timerBtn.addEventListener('click', () => {
    timerDiv.classList.add('visible');
    timerDiv.classList.remove('hidden');
    calcDiv.classList.add('hidden');
    calcDiv.classList.remove('visible');
});

 