let seconds = 0;
let minutes = 0;
let hours = 0;
let timer;
let sWatchRunning = false;

function startStopwatch() {
    if(sWatchRunning){return;}
    timer = setInterval(countTime, 1000);
    if (seconds == 0) {
        seconds = 1;
    document.getElementById('tidTeller').innerHTML = hours + "." + minutes + "." + seconds;
    }
    sWatchRunning = true;
}

function countTime() {
    if (seconds == 59) {
        seconds = 0;
        if (minutes == 59) {
            minutes = 0;
            hours++;
        }
        else {
            minutes++;
        }
    }
    else {
        seconds++;
    }
    document.getElementById('tidTeller').innerHTML = hours + "." + minutes + "." + seconds;
}

function saveLap() {
    document.getElementById('savedLaps').innerHTML += hours + "." + minutes + "." + seconds + "<br>";
}

function stopTimer(){
    clearInterval(timer);
    sWatchRunning = false;
}

function resetAll() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('tidTeller').innerHTML = "0.0.0";
    document.getElementById('savedLaps').innerHTML = "";
    sWatchRunning = false;
}