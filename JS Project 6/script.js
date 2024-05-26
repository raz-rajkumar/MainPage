const hour=0;
const min=0;
const tim=0;

 
function set()
{
    const hour=document.getElementById('hh').value
    const min=document.getElementById('mm').value
    tim=(hour*60+min*60)
    hour.textContent="0";
    min.textContent="0";
}

let countdownTime=tim;
let timer;
let remainingTime = countdownTime;

function updateClock() {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    if (timer) return; 

    timer = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateClock();
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    remainingTime = countdownTime;
    updateClock();
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('resetButton').addEventListener('click', resetTimer);

updateClock();
