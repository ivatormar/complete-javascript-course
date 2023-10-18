'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// const btnsOpenModal=document.querySelector('.show-modal')//Si hiciesemos esto al ahber varios solo cogería el primero de todos, por lo tanto tenemos que hacer un .querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal); //
}


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown',function(eevent){
    console.log(eevent);
    if(eevent.key==='Escape')closeModal()
     
})
