'use strict';

//variables store the elements we want to manipulate
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//open modal function
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// close modal function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//implementing actions when any of the three show modal button clicked
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

//close the modal when the close button clicked or the overlay clicked or the ESCAPE key clicked

//when close button clicked
btnCloseModal.addEventListener('click', closeModal);

//when the overlay clicked
overlay.addEventListener('click', closeModal);

// when the ESCAPE key clicked
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
