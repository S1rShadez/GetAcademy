// model
let playerMoney = 0;
let totalMoneyEarned = 0;

let cursorStrength = 1;
let cursorStrengthPrice = 20;

let autoClickerAmount = 0;
let autoClickerPrice = 10;
let autoClickerStrength = 1;

// controller
setInterval(function () { game() }, 500);
function game() {
    //let payout = 0;
    autoClicker();
    //updateView();
}

function addMoney() {
    playerMoney += cursorStrength;
    console.log(playerMoney);
    updateView();
}

function autoClicker() {
    playerMoney += autoClickerAmount;
    updateView();
}

function purchaseUpgrade(upgradeType) {
    if (upgradeType == "AutoClicker" && playerMoney >= autoClickerPrice) {
        autoClickerAmount += 0.25;
        playerMoney -= autoClickerPrice;
        autoClickerPrice += Math.floor((autoClickerPrice / 2) * Math.exp(1));
        updateView();
    }
    else if(upgradeType == "CursorStrength" && playerMoney >= cursorStrengthPrice){
        cursorStrength += 0.25;
        playerMoney -= cursorStrengthPrice;
        cursorStrengthPrice += Math.floor((autoClickerPrice / 2) * Math.exp(1));
        updateView();
    }
}