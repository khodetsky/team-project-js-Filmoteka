// import { drawGallery } from './drawGallery';

// const galleryRef = document.querySelector('.gallery');
const btnClose = document.querySelector('.modal__btn--close');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalMcpContainer = document.querySelector('.modal__data--content');
const body = document.querySelector('body');

function modalHidden() {
  backdrop.classList.add('hidden');
  body.style.overflow = '';
  removeListener();
  modalMcpContainer.innerHTML = '';
  console.log();
  
  // drawGallery(galleryRef, localStorage.setItem(LOCAL_MOVIES_KEY, JSON.stringify(localMovies.results)));
}
// закриття модалки кнопкою
function closeModalBtn() {
  modalHidden();
}
// закриття модалки клавішою Escape
function closeModalEscape(e) {
  if (e.key != 'Escape') {
    return;
  } else {
    if (!backdrop.classList.contains('hidden')) {
      modalHidden();
    }
  }
}
// закриття модалки кліком поза модалкою
function closeModalClick(e) {
  const onClickElement = e.target;
  const modalWindow = onClickElement.closest('.modal');
  if (!backdrop.classList.contains('hidden') & (modalWindow == null)) {
    modalHidden();
  }
}
// зняття слухачів
function removeListener() {
  btnClose.removeEventListener('click', closeModalBtn);
  document.removeEventListener('keyup', closeModalEscape);
  document.removeEventListener('click', closeModalClick);
}

export {
  closeModalBtn,
  closeModalEscape,
  closeModalClick,
  modal,
  btnClose,
  backdrop,
};
