export function showErrorMsg() {
    const errorRef = document.querySelector('.header__text-error');
    errorRef.classList.remove('is-hidden');
};

export function hideErrorMsg() {
    const errorRef = document.querySelector('.header__text-error');
    errorRef.classList.add('is-hidden');
};

