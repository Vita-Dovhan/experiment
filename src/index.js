import './sass/main.scss';
const refs = {
  openBtn: document.querySelector('[data-action="open-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  closeBtn: document.querySelector('[data-action="close-modal"]')
}
refs.openBtn.addEventListener("click", onOpenModal);
refs.backdrop.addEventListener("click", onBackdrop);
refs.closeBtn.addEventListener("click", onCloseModal);


function onOpenModal() {
  window.addEventListener('keydown', onEscPress);
  document.body.classList.add('show-modal')
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscPress)
  document.body.classList.remove('show-modal')
}
function onBackdrop(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}
function onEscPress(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}