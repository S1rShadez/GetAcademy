//function that generates a chess board 8 x 8 
function generateBoard(){
    let board = '';
    let counter = 0;
    for(let x = 0; x < 64; x++){
        board += /*HTML*/`
            <span class="boardSquare" id='square${x}'>${placeChessPieces(x) || ''}</span>
        `;
        counter++;
        if (counter == 8) {
            board += "<br>"
            counter = 0;
        }
    }
    return board;
}

//function that places the chess pieces on the board and assigns them a value
function placeChessPieces(position){
    if(position <= 15){
        if(position == 0 || position == 7){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${bCP.rook}" alt="black rook" width="70px">`;
        }
        else if(position == 1 || position == 6){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${bCP.knight}" alt="black knight" width="70px">`;
        }
        else if(position == 2 || position == 5){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${bCP.bishop}" alt="black bishop" width="70px">`;
        }
        else if(position == 3){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${bCP.queen}" alt="black queen" width="70px">`;
        }
        else if(position == 4){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${bCP.king}" alt="black king" height="70px">`;
        }
        else if(position > 7 && position < 16){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${bCP.pawn}" alt="black pawn" width="70px">`;
        }
    }
    else if(position >= 48){
        if(position == 56 || position == 63){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${wCP.rook}" alt="white rook" height="70px">`;
        }
        else if(position == 57 || position == 62){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${wCP.knight}" alt="white knight" height="70px">`;
        }
        else if(position == 58 || position == 61){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${wCP.bishop}" alt="white bishop" height="70px">`;
        }
        else if(position == 59){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${wCP.queen}" alt="white queen" height="70px">`;
        }
        else if(position == 60){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${wCP.king}" alt="white king" height="70px">`;
        }
        else if(position > 47 && position < 56){
            return /*HTML*/`<img class="chessPiece" onclick="movePiece(this)" src="img/${wCP.pawn}" alt="white pawn" height="70px">`;
        }
    }
}

//function that controls the movement of the chess pieces 
let location;
function movePiece(selectedPiece){
    location = selectedPiece.parentNode.id;
    
}

//function that makes sure only one player at a time
function checkTurn(){}

//function that checks if an attack has been done
function isAttack(){}
