let number1, number2, points = 0;


resetGame();

function submitGuess(){
    let input = document.getElementById('inputText').value;
    console.log(input);
    if (number1 > number2 && input == ">") {
        points++;
        document.getElementById('score').innerHTML = points;
        resetGame();
    }
    else if (number1 < number2 && input == "<") {
        points++;
        document.getElementById('score').innerHTML = points;
        resetGame();
    }
    else if (number1 == number2 && input == "==") {
        points++;
        document.getElementById('score').innerHTML = points;
        resetGame();
    }
    else{
        points--;
        document.getElementById('score').innerHTML = points;
        resetGame();
    }
}

function resetGame(){
    number1 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    number2 = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    document.getElementById('firstNumber').innerHTML = number1;
    document.getElementById('secondNumber').innerHTML = number2;
    document.getElementById('inputText').value = '';
}