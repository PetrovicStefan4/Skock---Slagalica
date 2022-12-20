import createComputesCombination from "./js/createComputesCombination.js";
import checkMatches from "./js/checkMatches.js";
import displayMatches from "./js/displayMatches.js";
import getSymbol from "./js/displaySimbol.js";

const choices = document.querySelectorAll(".choice");
const fields = document.querySelectorAll(".field:not(.disabled)");
const checkBtn = document.querySelector("#check");
const deleteBtn = document.querySelector("#deleteBtn");
const playAgainBtn = document.querySelector("#playAgain");
const finalResults = document.querySelectorAll(".finalResult");
const computersCombination = createComputesCombination();
let playersCombination = [];
let round = 0;
let isGameEnded = false;

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!e.target.getAttribute("data-number")) {
      return;
    }

    if (isGameEnded) {
      return;
    }

    if (playersCombination.length === 4) {
      return;
    }

    const chosenNumber = Number(e.target.getAttribute("data-number"));
    playersCombination.push(chosenNumber);
    fields[round].innerHTML = getSymbol(chosenNumber);
    round++;
  });
});

checkBtn.addEventListener("click", (e) => {
  if (playersCombination.length !== 4) {
    return;
  }
  const match = checkMatches(computersCombination, playersCombination);
  displayMatches(match);

  if (match.redMatches === 4 || fields.length === round) {
    for (let i = 0; i < 4; i++) {
      finalResults[i].innerHTML = getSymbol(computersCombination[i]);
      showPlayAgainButton();
      isGameEnded = true;
    }
  }

  playersCombination = [];
});

deleteBtn.addEventListener("click", (e) => {
  if (!playersCombination.length) {
    return;
  }

  playersCombination?.pop();
  fields[round - 1].innerHTML = "";
  round = round - 1;
});

const showPlayAgainButton = () => {
  checkBtn.classList.add("d-none");
  deleteBtn.classList.add("d-none");
  playAgainBtn.classList.remove("d-none");
};

playAgainBtn?.addEventListener("click", (e) => {
  location.reload();
});
