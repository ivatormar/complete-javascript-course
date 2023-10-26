'use strict';

//Selecting elements
const player0Element=document.querySelector('.player--0')
const player1Element=document.querySelector('.player--1')

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
diceElement.classList.add('hidden');

const scores=[0,0]
let currentScore = 0;
let activePlayer=0;

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
    document.getElementById(`current--${activePlayer}`).textContent=0
    currentScore=0;
    activePlayer=activePlayer===0?1:0 //*Si el activePlayer es el jugador 1 le pasamos el turno al dos, sino al 1
    player0Element.classList.toggle('player--active')//*AÑade la clase sino la tiene, y si la tiene la quita
    player1 Element.classList.toggle('player--active')//*AÑade la clase sino la tiene, y si la tiene la quita

  } else {
    //Add doce tp tje cirremt scpre
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent=currentScore


  }
});
