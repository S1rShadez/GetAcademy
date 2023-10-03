// view
updateView();
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <div onclick="addMoney()">Click me for free money!</div>
    <br>
    <div>Player money: ${Math.floor(playerMoney)}£</div>
    <br>
    <div>
    Upgrades:
    <div onclick="purchaseUpgrade('AutoClicker')">Purchase auto clicker | Price: ${autoClickerPrice}£ | Current auto clicker power: ${autoClickerAmount*2}£ per second</div>
    <br>
    <div onclick="purchaseUpgrade('CursorStrength')">Purchase clicking power | Price: ${cursorStrengthPrice}£ | Current clicking power: ${cursorStrength}£ per click</div>
    </div>

    `;
}