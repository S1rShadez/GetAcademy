function displayIntroText() {

    document.getElementById('mainContent').innerHTML = '';

    document.getElementById('introTextBox').classList.add('selected');

    document.getElementById('hobbiesTextBox').classList.remove('selected');

    document.getElementById('portfolioTextBox').classList.remove('selected');

    document.getElementById('mainContent').innerHTML = introText;
}

function displayHobbiesText() {

    document.getElementById('mainContent').innerHTML = '';

    document.getElementById('hobbiesTextBox').classList.add('selected');

    document.getElementById('introTextBox').classList.remove('selected');

    document.getElementById('portfolioTextBox').classList.remove('selected');

    document.getElementById('mainContent').innerHTML = hobbyText;
}

function displayPortfolioText() {
    document.getElementById('mainContent').innerHTML = '';

    document.getElementById('hobbiesTextBox').classList.remove('selected');

    document.getElementById('introTextBox').classList.remove('selected');

    document.getElementById('portfolioTextBox').classList.add('selected');

    document.getElementById('mainContent').innerHTML = portfolioText;
}

var introText = /*HTML*/`
<div id="mainText">
        <h1>Introduksjonstekst om meg</h1>
        <h3>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </h3>
    </div>
`;

var hobbyText = /*HTML*/`
<div id="mainText">
        <h1>Hobbyene mine</h1>
        <h3>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </h3>
    </div>
`;

var portfolioText = /*HTML*/`
<div id="mainText">
        <h1>Porteføljen min</h1>
        <h3>
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
            Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
            Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </h3>
    </div>
`;

function randomBackgroundColor() {
    var max = 255;
    var min = 0;
    var r = Math.floor(Math.random() * (max - min + 1) + min);
    var g = Math.floor(Math.random() * (max - min + 1) + min);
    var b = Math.floor(Math.random() * (max - min + 1) + min);

    document.body.style.background = "rgb(" + r + "," + g + "," + b + ")";
}

function resetBackgroundColor() {
    document.body.style.background = "rgb(56, 55, 55)";
}