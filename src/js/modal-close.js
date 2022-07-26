const btnClose = document.querySelector('.modal__btn--close');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalMcpContainer = document.querySelector('.modal__data--content');

function modalHidden() {
  backdrop.classList.add('hidden');
  removeListener();
  modalMcpContainer.innerHTML = '';
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
