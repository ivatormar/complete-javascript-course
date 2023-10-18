'use strict';

//Selecting elements
const score0Element=document.querySelector('#score--0')
const score1Element =document.getElementById('score--1')
const diceElement=document.querySelector('.dice')
const btnNew=document.querySelector('.btn--new')
const btnRoll=document.querySelector('.btn--roll')
const btnHold=document.querySelector('.btn--hold')




//Starting conditions
score0Element.textContent=0;
score1Element.textContent=0;
diceElement.classList.add('hidden ')


//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    //1.Generating arandom dice roll


    //2. Display the dice


    //3. Check for if a rolled 1: if ture, switch player
})