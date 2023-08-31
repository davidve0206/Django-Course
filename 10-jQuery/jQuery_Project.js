// Set the two player objects
var player1 = {pName: "Player 1", pColor: "blue"}
var player2 = {pName: "Player 2", pColor: "red"}

// Get the two player names
player1.pName = prompt("Hello Player 1, what is your name?")
player2.pName = prompt("Hello Player 2, what is your name?")

// Function that checks if 4 items the same
function colorMatchCheck(one,two,three,four){
    return (one===two && one===three && one===four && one !== 'rgb(211, 211, 211)'); //&& one !== undefined
  }

// Function that returns the color of a cell
function returnColour(row, col) {
    var cell = $('table tr:eq(' + row + ') td:eq(' + col + ')');
    return cell.css("background-color")
}

// Functions that return true if there is a winner by direction
function horizontalWinCheck() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0 ; col < 3; col++) {
            if (colorMatchCheck(returnColour(row, col), returnColour(row, col+1), returnColour(row, col+2), returnColour(row, col+3))) {
                console.log("Horizontal win at row " + row + " column " + col);
                return true;
            } else { continue }
        }
    }
}

function verticalWinCheck() {
    for (let col = 0; col < 6; col++) {
        for (let row = 0 ; row < 3; row++) {
            if (colorMatchCheck(returnColour(row, col), returnColour(row+1, col), returnColour(row+2, col), returnColour(row+3, col))) {
                console.log("Vertical win at row " + row + " column " + col)
                return true
            } else { continue }
        }
    }
}

function diagonalWinCheck() {
    for (let col = 0; col < 6; col++) {
        for (let row = 0 ; row < 3; row++) {
            
            diag1 = colorMatchCheck(returnColour(row, col), returnColour(row+1, col+1), returnColour(row+2, col+2), returnColour(row+3, col+3))
            diag2 = colorMatchCheck(returnColour(row, col), returnColour(row+1, col-1), returnColour(row+2, col-2), returnColour(row+3, col-3))
            
            if ( diag1 || diag2 ) {
                console.log("Diagonal win at row " + row + " column " + col)
                return true
            } else { continue }
        }
    }
}

function tieCheck() {
    if( returnColour(0, 0) !== 'rgb(211, 211, 211)' && 
        returnColour(0, 1) !== 'rgb(211, 211, 211)' && 
        returnColour(0, 2) !== 'rgb(211, 211, 211)' && 
        returnColour(0, 3) !== 'rgb(211, 211, 211)' &&
        returnColour(0, 4) !== 'rgb(211, 211, 211)' &&
        returnColour(0, 5) !== 'rgb(211, 211, 211)' ) {
            console.log("Its a tie.");
            return true
    }
}

// Function to check if there is a winner in any direction and change banners accordingly
function checkWinner() {
    hor = horizontalWinCheck()
    ver = verticalWinCheck()
    diag = diagonalWinCheck()

    if (hor || ver || diag) {
        $("h1").text(activePlayer.pName + " wins! Game Over.")
        $("h2").text("Reload browser to restart.")
        $("#gameText").slideUp()
    } else if (tieCheck()) {
        $("h1").text("Game Over! It's a tie.")
        $("h2").text("Reload browser to restart.")
        $("#gameText").slideUp()
    }
}

// Function to prompt a player to make their move
function promtPlayer(counter) {
    
    // Check with player's turn is
    if (counter % 2 === 0) {
        activePlayer = player2
    } else {activePlayer = player1}   
    
    // Set text to prompt player to make move
    $("#gameText").text("It is " + activePlayer.pName + "'s turn, please pick a column to place your " + activePlayer.pColor + " chip.")
}

// Function to set the color in the last chip of a column class

function placeChip() {
    // Place a chip
    // Grab al items of the same column
    var column = $("td."+$(this).attr("class"))
    // Check if the color of each row is grey; if so, changes the color
    for (let i = -1; i >= column.length * -1; i = i-1) {     
        
        if (column.eq(i).css("background-color") == 'rgb(211, 211, 211)') {
            column.eq(i).css("background-color", activePlayer.pColor);
            checkWinner();
            counter++;
            break;}     
    }

    // Prompt next player
    promtPlayer(counter);
}

// Set basic variables for the game's control - a jQuery variable for any cell in the board, the active player
var board = $("td");
var activePlayer = player1;
var counter = 1;

promtPlayer(counter);
board.on("click", placeChip);