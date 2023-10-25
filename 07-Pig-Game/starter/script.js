'use strict';

//Selecting elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden ');
let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1.Generating arandom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display the dice
  diceElement.classList.remove('hidden'); //*Lo hacemos visible
  diceElement.src = `dice-${dice}.png`;
  //3. Check for if a rolled 1: if ture,
  if (dice === 1) {
    //switch player
  } else {
    //Add doce tp tje cirremt scpre
    currentScore += dice;
    current0El.textContent = currentScore;
  }
});
