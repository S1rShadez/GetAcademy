updateView(startView());
function updateView(view) {
    document.getElementById('app').innerHTML = /*HTML*/`
                ${view}
            `;
}

function startView(){
    return generateBoard();
}