const btnClose = document.querySelector('.modal__btn--close');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');

function modalHidden() {
  backdrop.classList.add('hidden');
  removeListener();
}
// закриття модалки кнопкою
function closeModalBtn() {
  console.log('закриття модалки кнопкою');
  modalHidden();
}
// закриття модалки клавішою Escape
function closeModalEscape(e) {
  console.log('закриття модалки клавішою Escape');
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
    console.log('закриття модалки кліком поза межами модалки');
    modalHidden();
  }
}
// зняття слухачів
function removeListener() {
  console.log('зняття слухачів для закриття модалки');
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
