const body = document.querySelector("body");
const playerName = document.querySelector(".player-name");
const message = document.querySelector(".message");
const inputNumber = document.querySelector(".inputNumber");
const startBtn = document.querySelector(".start-btn");
const inputNumber2 = document.querySelector(".inputNumber2");
const player2 = document.querySelector(".player-2");
const guessBtn = document.querySelector(".guessBtn");
const playerTwoMsg = document.querySelector(".playerTwoMsg");
const tryagainBtn = document.querySelector(".tryagainBtn");
const playGain = document.querySelector(".playGain");

const title = document.querySelector(".title");

const player1 = document.querySelector(".player-1");

const playerTwoName = document.querySelector(".playerTwoName");

const messagetwo = document.querySelector(".message-two");

const winner = document.querySelector(".winnerImg");

const message2 = document.querySelector(".message2");

let playerValue = 0;
let chance = 3;

startBtn.addEventListener("click", function () {
  if (isNaN(inputNumber.value)) {
    message2.innerHTML = `"String Not Allow"`;
    message2.style.display = "block";
  }
  if (
    inputNumber.value != "" &&
    inputNumber.value >= 0 &&
    inputNumber.value <= 10
  ) {
    playerValue = inputNumber.value;
    message.innerHTML = "Valid Number";
    message.style.color = "green";
    player1.style.display = "none";
    player2.style.display = "block";
  } else {
    message.innerHTML = `Invalid Number`;
    message.style.color = "#fff";
  }
});

guessBtn.addEventListener("click", function () {
  if (
    inputNumber2.value != "" &&
    inputNumber2.value >= 0 &&
    inputNumber2.value <= 10
  ) {
    chance--;
    playerTwoMsg.innerHTML = `your guess in wrong you have chance ${chance}`;
    playerTwoMsg.style.color = "#fff";

    if (playerValue === inputNumber2.value) {
      playerTwoMsg.style.display = "none";
      guessBtn.style.display = "none";
      inputNumber2.style.display = "none";
      messagetwo.style.display = "none";
      title.style.display = "none";
      player2.style.background = "none";
      player2.style.boxShadow = "none";
      winner.style.display = "block";
      playGain.style.display = "block";

      playGain.addEventListener("click", function () {
        location.reload();
      });
    }

    if (chance === 0) {
      playerTwoMsg.innerHTML = "You lose";
      guessBtn.style.display = "none";

      tryagainBtn.style.display = "block";

      tryagainBtn.addEventListener("click", function () {
        let confirmResult = confirm("You want to play again ?");
        if (confirmResult) {
          location.reload(confirmResult);
        }
      });
    }
  } else {
    message.style.display = "block";
    message.innerHTML = `insert value you have chance ${chance}`;
    message.style.color = "#fff";
  }
});
