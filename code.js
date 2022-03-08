// Roll dice button function:

function rollDice(btn) {
  if (diceAudio.currentTime !== 0) {
    diceAudio.currentTime = 0;
  }
  diceAudio.play();
  roll += 1;
  const diceRoll = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  diceImg.src = `dice-images/dice${diceRoll}.png`;

  if (diceRoll != 1) {
    currentTotal += diceRoll;
    switch (playerTurn) {
      case 1:
        p1Score.innerText = currentTotal;
        p1Prob.innerText = `P(!1) = ${round(Math.pow(5 / 6, roll) * 100, 1)}%`;
        break;

      case 2:
        p2Score.innerText = currentTotal;
        p2Prob.innerText = `P(!1) = ${round(Math.pow(5 / 6, roll) * 100, 1)}%`;
    }
  } else {
    roll = 1;
    currentTotal = 0;
    switch (playerTurn) {
      case 1:
        p1Score.innerText = currentTotal;
        p1Prob.innerText = "P(!1) = 83.3%";
        p1CurrentBest.innerText = `Current Best: ${currentTotal}`;
        break;

      case 2:
        p2Score.innerText = currentTotal;
        p2Prob.innerText = "P(!1) = 83.3%";
        p2CurrentBest.innerText = `Current Best: ${currentTotal}`;
    }
  }
}

// Custom rounding function as no convenient built in methods exist for d.p:

function round(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Pass turn button function:

function passTurn() {
  roll = 1;
  switch (playerTurn) {
    case 1:
      p1Score.innerText = 0;
      p1Prob.innerText = "P(!1): 83.3%";
      if (currentTotal !== 0) {
        p1CurrentBest.innerText = `Current Best: ${currentTotal}`;
      }
      currentTotal = 0;
      playerTurn = 2;
      p2.style.backgroundColor = "#ff1f4b90";
      p1.style.backgroundColor = "#3b5bff20";
      break;

    case 2:
      p2Score.innerText = 0;
      p2Prob.innerText = "P(!1): 83.3%";
      if (currentTotal !== 0) {
        p2CurrentBest.innerText = `Current Best: ${currentTotal}`;
      }
      currentTotal = 0;
      playerTurn = 1;
      p1.style.backgroundColor = "#3b5bff90";
      p2.style.backgroundColor = "#ff1f4b20";
  }
}

// Declaration and initialisation of element vars:

let diceImg = document.getElementsByTagName("img")[0];
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p1Score = document.getElementById("p1-score");
let p2Score = document.getElementById("p2-score");
let p1Prob = document.getElementsByTagName("h3")[0];
let p2Prob = document.getElementsByTagName("h3")[2];
let p1CurrentBest = document.getElementsByTagName("h3")[1];
let p2CurrentBest = document.getElementsByTagName("h3")[3];
let diceAudio = new Audio("dice-throw.mp3");
let roll = 1;
let currentTotal = 0;
let playerTurn = 1;
