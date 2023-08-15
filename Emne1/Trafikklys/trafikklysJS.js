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