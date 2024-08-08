let randomN = parseInt(Math.random() * 100 + 1);

console.log(randomN);

const button = document.querySelector(".button");

const form = document.querySelector(".form");

const guessField = document.querySelector(".guessField");

const info = document.querySelector(".info");

const numberOfGuessR = document.querySelector(".numberOfGuessR");

const previousGuess = document.querySelector(".previousGuess");

let playGame = true;

let nG = 0;

const elem = document.createElement("span");

if (playGame) {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(guessField.value);
    checkGuess(guess);
  });
}

function checkGuess(guess) {
  if (guess === randomN) {
    guessField.value = "";
    elem.innerHTML = "<h2>You guessed the right no.</h2>";
    info.appendChild(elem);
    displayGuess(guess);
    endGame();
  }
  else if(guess<randomN){
        elem.innerHTML='<h2>guess is too low</h2>';
        info.appendChild(elem);
        nG++;
        displayGuess(guess);
  }


  else{ 
    elem.innerHTML='<h2>guess is too high</h2>';
    info.appendChild(elem);
    nG++;
    displayGuess(guess);
}
}

function displayGuess(guess) {
guessField.value='';
  document.querySelector(".previousGuess").innerHTML += ` ${guess}`;
  numberOfGuessR.innerHTML = `${10 - nG}`;
  if(parseInt(numberOfGuessR.innerHTML)===0){endGame();}
}

function endGame() {
  guessField.setAttribute("disabled", "");
  numberOfGuessR.innerHTML = "0";
  playGame = false;
  newGame();
}

function newGame() {
  const btn = document.createElement("button");
  btn.innerHTML = "start a new game";
  info.appendChild(btn);
  console.log(info);
  btn.addEventListener("click", function (e) {
    randomN = parseInt(Math.random() * 100 + 1);
    console.log(randomN);
    guessField.removeAttribute("disabled");
    //previousGuess
    document.querySelector(".previousGuess").innerHTML = "previous guess";
    //numberOfGuessR
    document.querySelector(".numberOfGuessR").innerHTML = "10";
    info.removeChild(elem);
    info.removeChild(btn);
    playGame=true;
  });
}
