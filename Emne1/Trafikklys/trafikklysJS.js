function changeLights(selectedButton){
    if (selectedButton == 1) {
        document.getElementById('redLight').style.backgroundColor = 'red';
        document.getElementById('yellowLight').style.backgroundColor = '';
        document.getElementById('greenLight').style.backgroundColor = '';
    }
    else if (selectedButton == 2) {
        document.getElementById('redLight').style.backgroundColor = 'red';
        document.getElementById('yellowLight').style.backgroundColor = 'orange';
        document.getElementById('greenLight').style.backgroundColor = '';
    }
    else if (selectedButton == 3) {
        document.getElementById('redLight').style.backgroundColor = '';
        document.getElementById('yellowLight').style.backgroundColor = '';
        document.getElementById('greenLight').style.backgroundColor = 'green';
    }
}

let timer;
let started = false;
let stopLights = false;

function startLights(){
    if (started) {
        clearInterval(timer);
        timer = setInterval(autoLights, 3000);
    }
    else{
        timer = setInterval(autoLights, 100);
        started = true;
        stopLights = false;
    }
}

function autoLights(){
    if(stopLights){return};
    //setTimeout her ser litt rare ut, men det funket ikke med en funksjon med input, 
    //uten at den funksjonen var wrappa i en ny funksjon
    setTimeout(function(){changeLights(3)}, 500);
    setTimeout(function(){changeLights(2)}, 1500);
    setTimeout(function(){changeLights(1)}, 2500);
    startLights();
}

function stop(){
    stopLights = true;
    started = false;
    clearInterval(timer);
}