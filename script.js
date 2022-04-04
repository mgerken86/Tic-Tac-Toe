let playCount = 0;
showTurn();

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

var buttons = [one, two, three, four, five, six, seven, eight, nine];

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeBtn);
}

function changeBtn(currentBtn){
  currentBtn = (event.target)
    if ((currentBtn.value == "X") || (currentBtn.value == "O")){
      currentBtn.value == null;
    } else 
  if ((playCount == 0) || (playCount == 2) || (playCount == 4) || (playCount == 6) || (playCount == 8)) {
    currentBtn.value = "X";
    playCount++;
  } else {
    currentBtn.value = "O";
    playCount++;
  }
  gamePlay();
  showTurn();
}

function player1Wins() {
  alert("X WINS!!!");
  resetGame();
}

function player2Wins(){
  alert("O WINS")
  resetGame();
}

function resetGame(){
  for (var i = 0; i < buttons.length; i++) {
  buttons[i].value = "";
  playCount = 0;
  }
}

function gamePlay(){
  if (((one.value == "X") && (two.value == "X") && (three.value == "X")) ||
  ((four.value == "X") && (five.value == "X") && (six.value == "X")) || 
  ((seven.value == "X") && (eight.value == "X") && (nine.value == "X")) ||
  ((one.value == "X") && (four.value == "X") && (seven.value == "X")) ||   
  ((two.value == "X") && (five.value == "X") && (eight.value == "X")) ||   
  ((three.value == "X") && (six.value == "X") && (nine.value == "X")) ||   
  ((one.value == "X") && (five.value == "X") && (nine.value == "X")) ||   
  ((three.value == "X") && (five.value == "X") && (seven.value == "X"))) {
    player1Wins();
  } else if (((one.value == "O") && (two.value == "O") && (three.value == "O")) ||
  ((four.value == "O") && (five.value == "O") && (six.value == "O")) || 
  ((seven.value == "O") && (eight.value == "O") && (nine.value == "O")) ||
  ((one.value == "O") && (four.value == "O") && (seven.value == "O")) ||   
  ((two.value == "O") && (five.value == "O") && (eight.value == "O")) ||   
  ((three.value == "O") && (six.value == "O") && (nine.value == "O")) ||   
  ((one.value == "O") && (five.value == "O") && (nine.value == "O")) ||   
  ((three.value == "O") && (five.value == "O") && (seven.value == "O"))){
    player2Wins();
  }
  if (playCount == 9){
    alert("This game is a DRAW");
    resetGame();
  }
}
 
function showTurn(){ 
  if ((playCount == 0) || (playCount == 2) || (playCount == 4) || (playCount == 6) || (playCount == 8)){
    document.getElementById('playerTurn').innerText =  ("It is X's turn");
  } else document.getElementById('playerTurn').innerText = ("It is O's turn");
}