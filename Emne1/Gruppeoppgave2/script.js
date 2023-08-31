//Model
let matRow = 10;
let stressRow = 10;
let wcRow = 10;
let focusRow = 1;
let restlessRow = 10;
let waterRow = 10;
let mood = 1;

let timers = [
    setInterval(increaseHunger, 2000),
    setInterval(increaseStress, 1500), 
    setInterval(increaseWc, 3000), 
    setInterval(decreaseFocus, 1250), 
    setInterval(increaseRestless, 2500), 
    setInterval(increaseThirst, 1000)];

//View
checkTemper();
updateCSS();
function updateCSS(){
    document.getElementById('columnStyle').innerHTML = /*CSS*/`
    #matColumn {
        background-color: rgb(173, 91, 91);
        grid-column: 1 / 2; grid-row: ${matRow} / 11;
    }
    
    #stressColumn {
        background-color: rgb(215, 215, 177);
        grid-column: 2 / 3; grid-row: ${stressRow} / 11;
    }
    
    
    #wcColumn {
        background-color: rgb(198, 152, 152);
        grid-column: 3 / 4; grid-row: ${wcRow} / 11;
    }
    
    #fokusColumn {
        background-color: rgb(156, 180, 156);
        grid-column: 4 / 5; grid-row: ${focusRow} / 11;
    }
    
    #restlessColumn {
        background-color: rgb(222, 200, 158);
        grid-column: 5 / 6; grid-row: ${restlessRow} / 11;
    }
    
    #vannColumn {
        background-color: rgb(170, 170, 212);
        grid-column: 6 / 7; grid-row: ${waterRow} / 11;
    }
    `; 
}

//Controller
function increaseHunger(){
    if(matRow == 1){mood += 1;clearInterval(timers[0]);return;}
    matRow -=1;
    checkTemper();
    updateCSS();
}
function increaseStress(){
    if(stressRow == 1){mood += 1;clearInterval(timers[1]);return;}
    stressRow -=1;
    checkTemper();
    updateCSS();
}
function increaseWc(){
    if(wcRow == 1){mood += 1;clearInterval(timers[2]);return;}
    wcRow -=1;
    checkTemper();
    updateCSS();
}
function decreaseFocus(){
    if(focusRow == 10){mood += 1;clearInterval(timers[3]);return;}
    focusRow +=1;
    checkTemper();
    updateCSS();
}
function increaseRestless(){
    if(restlessRow == 1){mood += 1;clearInterval(timers[4]);return;}
    restlessRow -=1;
    checkTemper();
    updateCSS();
}
function increaseThirst(){
    if(waterRow == 1){mood += 1;clearInterval(timers[5]);return;}
    waterRow -=1;
    checkTemper();
    updateCSS();
}

function checkTemper(){
    if (mood == 1) {
        document.getElementById('venstreBoks').innerHTML = /*HTML*/`
        <div><img src="img/Selfie.jpg" alt="Selfie" height="606px" width="700px"> </div>
        <div class="emoji"><img src="img/Smile.jpg" alt="Smile" width="90px" height="100px"></div>
        `;
        return;
    }
    else if (mood == 2) {
        document.getElementById('venstreBoks').innerHTML = /*HTML*/`
        <div><img src="img/Selfie.jpg" alt="Selfie" height="606px" width="700px"> </div>
        <div class="emoji"><img src="img/Nutral.jpg" alt="Smile" width="90px" height="100px"></div>
        `;
        return;
    }
    else if (mood == 3) {
        document.getElementById('venstreBoks').innerHTML = /*HTML*/`
        <div><img src="img/Selfie.jpg" alt="Selfie" height="606px" width="700px"> </div>
        <div class="emoji"><img src="img/Angry.jpg" alt="Smile" width="90px" height="100px"></div>
        `;
        return;
    }
    else if (mood >= 4) {
        document.getElementById('venstreBoks').innerHTML = /*HTML*/`
        <div><img src="img/Selfie.jpg" alt="Selfie" height="606px" width="700px"> </div>
        <div class="emoji"><img src="img/Angry.jpg" alt="Smile" width="90px" height="100px"></div>
        <h1 style="float: left; margin-top: -60vh; margin-left: 500px; position: absolute; color: yellow;">I QUIT!!!!!!!</h1>
        `;
        setTimeout(seppuku, 1000);
        return;
    }
    document.getElementById('venstreBoks').innerHTML = /*HTML*/`
    <div><img src="img/Selfie.jpg" alt="Selfie" height="606px" width="700px"> </div>
    `;
}

function seppuku(){
    window.open('','_self').close();
}