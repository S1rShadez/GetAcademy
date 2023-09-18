var openOrClosed = [0, 0, 0, 0, 0];
var head = 1;
var body = 1;
var feet = 1;

function noLayout() {
    document.getElementById('layoutMaster').classList.value = "";
}

function horizontalLayout() {
    noLayout();
    document.getElementById('layoutMaster').classList.add('horizontal');
}

function verticalLayout() {
    noLayout();
    document.getElementById('layoutMaster').classList.add('vertical');
}

function gridLayout() {
    noLayout();
    document.getElementById('layoutMaster').classList.add('grid');
}

function showText(x) {
    let chosenBox = x;
    if (chosenBox == 0 && openOrClosed[0] == 0) {
        document.getElementById('toolsInfo').innerHTML = toolsText;
        openOrClosed[0] = 1;
    }
    else if (chosenBox == 0 && openOrClosed[0] == 1) {
        document.getElementById('toolsInfo').innerHTML = "";
        openOrClosed[0] = 0;
    }
    else if (chosenBox == 1 && openOrClosed[1] == 0) {
        document.getElementById('htmlInfo').innerHTML = htmlText;
        openOrClosed[1] = 1;
    }
    else if (chosenBox == 1 && openOrClosed[1] == 1) {
        document.getElementById('htmlInfo').innerHTML = "";
        openOrClosed[1] = 0;
    }
    else if (chosenBox == 2 && openOrClosed[2] == 0) {
        document.getElementById('cssInfo').innerHTML = cssText;
        openOrClosed[2] = 1;
    }
    else if (chosenBox == 2 && openOrClosed[2] == 1) {
        document.getElementById('cssInfo').innerHTML = "";
        openOrClosed[2] = 0;
    }
    else if (chosenBox == 3 && openOrClosed[3] == 0) {
        document.getElementById('jsInfo').innerHTML = jsText;
        openOrClosed[3] = 1;
    }
    else if (chosenBox == 3 && openOrClosed[3] == 1) {
        document.getElementById('jsInfo').innerHTML = "";
        openOrClosed[3] = 0;
    }
    else if (chosenBox == 4 && openOrClosed[4] == 0) {
        head = 1;
        body = 1;
        feet = 1;
        document.getElementById('hkbInfo').innerHTML = hkbText;
        openOrClosed[4] = 1;
    }
    else if (chosenBox == 4 && openOrClosed[4] == 1) {
        document.getElementById('hkbInfo').innerHTML = "";
        openOrClosed[4] = 0;
    }
}

function nextImage(buttonNr) {
    if (buttonNr == 1) {
        if (head == 4) {
            head = 0;
        }
        head++;
        document.getElementById('headImg').src = "img/head" + head + ".png";
    }
    if (buttonNr == 2) {
        if (body == 4) {
            body = 0;
        }
        body++;
        document.getElementById('bodyImg').src = "img/body" + body + ".png";
    }
    if (buttonNr == 3) {
        if (feet == 4) {
            feet = 0;
        }
        feet++;
        document.getElementById('feetImg').src = "img/legs" + feet + ".png";
    }
}

function previousImage(buttonNr) {
    if (buttonNr == 4) {
        if (head == 1) {
            head = 5;
        }
        head--;
        document.getElementById('headImg').src = "img/head" + head + ".png";
    }
    if (buttonNr == 5) {
        if (body == 1) {
            body = 5;
        }
        body--;
        document.getElementById('bodyImg').src = "img/body" + body + ".png";
    }
    if (buttonNr == 6) {
        if (feet == 1) {
            feet = 5;
        }
        feet--;
        document.getElementById('feetImg').src = "img/legs" + feet + ".png";
    }
}

var toolsText = /*html*/`
                <div class="miniCard">De to viktigste verktøyene vi skal bruke er disse:
                <ul>
                    <li>
                        Koderedigeringsprogrammet <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                        <br>Vi skal bruke noen <i>extensions</i>:
                        <ul>
                            <li>JavaScript-booster</li>
                            <li>es6-string-html</li>
                            <li>live-server</li>
                            <li>live-share</li>
                        </ul>
                    </li>
                    <li>Nettleseren <a href="https://www.google.com/intl/no/chrome/">Google Chrome</a></li>
                </ul>
            </div>
            `;
var htmlText = /*html*/`
        <div class="miniCard">
                Vi bruker HTML til å definere et dokument.
                <ul>
                    <li>Tagger for grunnleggende oppsett av en HTML-fil</li>
                    <li>Tagger for grunnleggende formatering av tekst</li>
                    <li><tt>&lt;div&gt;</tt></li>
                    <li><tt>&lt;input type="text"&gt;</tt></li>
                    <li><tt>&lt;button&gt;</tt></li>
                    <li><a href="https://www.w3schools.com/html/default.asp" target="_new">W3Schools HTML Tutorial</a>
                    </li>
                    <li><a href="https://www.w3schools.com/tags/default.asp" target="_new">W3Schools HTML Reference</a>
                    </li>
                </ul>
            </div>`;
var cssText = /*html*/`
        <div class="miniCard">
                Vi bruker CSS til å <i>style</i> et dokument, altså farger, fonter, utseende og lignende.
                <ul>
                    <li><tt>background-color</tt></li>
                    <li><tt>color</tt></li>
                    <li><tt>padding</tt></li>
                    <li><tt>margin</tt></li>
                    <li><tt>border</tt></li>
                    <li><tt>text-align</tt></li>
                    <li><tt>font-size</tt></li>
                    <li><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_new">Flexbox</a></li>
                    <li><a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_new">Grid</a></li>
                    <li><a href="https://www.w3schools.com/css/default.asp" target="_new">W3Schools CSS Tutorial</a>
                    </li>
                    <li><a href="https://www.w3schools.com/cssref/default.asp" target="_new">W3Schools CSS Reference</a>
                    </li>
                </ul>
            </div>`;
var jsText = /*html*/`
        <div class="miniCard">
                Det viktigste vi skal lære er programmeringsspråket JavaScript. Vi skal lære grunnleggende programmering
                ved
                å manipulere HTML- og CSS-kode på en nettside ved hjelp av JavaScript.
                <ul>
                    <li>Det finnes en W3Schools JavaScript Tutorial, men her anbefaler vi heller å følge kurset vårt på
                        Moodle.</li>
                    <li><a href="https://www.w3schools.com/jsref/default.asp" target="_new">W3Schools JavaScript
                            Reference</a></li>
                </ul>
            </div>`;
var hkbText = /*html*/`
<div class="miniCard">
                    <div class="bodyPart">
                        <button onclick="previousImage(4)"><</button>
                        <img id="headImg" src="img/head`+ head + `.png">
                        <button onclick="nextImage(1)">></button>
                    </div>
                    <div class="bodyPart">
                        <button onclick="previousImage(5)"><</button>
                        <img id="bodyImg" src="img/body`+ body + `.png">
                        <button onclick="nextImage(2)">></button>
                    </div>
                    <div class="bodyPart">
                        <button onclick="previousImage(6)"><</button>
                        <img id="feetImg" src="img/legs`+ feet + `.png">
                        <button onclick="nextImage(3)">></button>
                    </div>
                </div>
`;