import { teamMembers } from "./teamMembers";

const refs = {
    footerBtnLinkText: document.querySelector('[data-modal-open]'),
    backdrop: document.querySelector('[data-modal]'),
    modalBtnClose: document.querySelector('[data-modal-close'),
    teamMarkup: document.querySelector('.team'),
}

const body = document.querySelector('body');

refs.footerBtnLinkText.addEventListener('click', onFooterBtnClick);

function onFooterBtnClick(e) {
    e.preventDefault();
    window.addEventListener('keydown', onEscKeyPress);
    refs.modalBtnClose.addEventListener('click', onFooterCloseBtnClick);
    refs.backdrop.addEventListener('click', onBackdropClick);
    onModalToggle();
    body.style.overflow = 'hidden';

}

function onEscKeyPress(e) {
    if (e.code === 'Escape') {
        onModalToggle();
        removeEventListener();
    }
}

function onBackdropClick(e) {
   //если ли класс или по типу єлемента
    if (e.target.classList.contains('footer-backdrop')) {
        onModalToggle();
        removeEventListener();
    }
}

function onModalToggle() {
    refs.backdrop.classList.toggle('is-hidden');
}

function removeEventListener() {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.modalBtnClose.removeEventListener('click', onFooterCloseBtnClick);
    refs.backdrop.removeEventListener('click', onBackdropClick);
    body.style.overflow = '';

}
// console.log(teamMembers);

function onFooterCloseBtnClick() {
    onModalToggle();
    removeEventListener();
    console.log('footer btn click');
}

//шаблоний рядок для рендеру картки мембера***

const galleryMarkup = createMemberItem(teamMembers);

refs.teamMarkup.insertAdjacentHTML('beforeend', galleryMarkup);

function createMemberItem(members) {
    return members.map(({ name, img, position, link }) => {
        return `<li class="team__item"><a target="_blank" rel="noopener noreferrer" class="team__link" href="${link}">
                <img class="team__img" src="${img}" alt="team member">
              </a>
    <p class="team__name">${name}</p>
    <p class="team__position">${position}</p>
    </li>`;  
    }).join('');
}

/////***** */
