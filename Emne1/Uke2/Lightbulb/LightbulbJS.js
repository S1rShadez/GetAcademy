function turnOnLight() {
    const colorChanger = setInterval(changeLight, 125/2);
}

let i = 0;

function changeLight() {
    i++;
    document.getElementById('lightbulb').style.backgroundColor = 'rgba(255, 255, 0, '+i+'%)';
    
}