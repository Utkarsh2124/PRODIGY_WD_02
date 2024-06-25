const displaylELe = document.querySelector('.display');
const startELe = document.querySelector('.start');
const stopELe = document.querySelector('.stop');
const resetELe = document.querySelector('.reset');

let timer;
let elapsedTime = 0;
let startTime;
let isRunning = false;

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = ms % 1000;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
}

function updateDisplay() {
    displaylELe.textContent = formatTime(elapsedTime);
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
}

function stopTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateDisplay();
}

startELe.addEventListener('click', startTimer);
stopELe.addEventListener('click', stopTimer);
resetELe.addEventListener('click', resetTimer);

updateDisplay(); 
