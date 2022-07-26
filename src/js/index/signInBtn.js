const signInBtn = document.querySelector('.header__sign-in-btn');
const userInfoContainer = document.querySelector('.user-info');
const signOutBtn = document.querySelector('.header__sign-out-btn');
const iconContainer = document.querySelector('.sign-in--icon-container');

//Скрипти для десктопу і таблетки 

signInBtn.addEventListener('click', enterInAcc);
signOutBtn.addEventListener('click', exitFromAcc)

function enterInAcc() {
    if (signInBtn.classList.contains('if-user-entered')) {
        userInfoContainer.classList.toggle('is-hidden');
    } else {
        signInBtn.classList.add('if-user-entered');
        // Записувати сюди ім'я користувача
        signInBtn.textContent = 'User name'
    }  
}

function exitFromAcc() {
    if (confirm("Do you really want to leave?")) {
        signInBtn.classList.remove('if-user-entered');
        userInfoContainer.classList.add('is-hidden');
        signInBtn.textContent = 'Sign in'
        userInfoContainer.firstElementChild.textContent = "";
    }
}

// Скрипти для моб. версії

iconContainer.addEventListener('click', logInIcon);

function logInIcon() {
    if (iconContainer.classList.contains('if-user-entered')) {
        userInfoContainer.firstElementChild.textContent = 'User name';
        userInfoContainer.classList.toggle('is-hidden');
        elem.firstElementChild
    }else {
        iconContainer.innerHTML = "";
        iconContainer.insertAdjacentHTML('beforeend', `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.84 14.31c-.295.522-.517 1.09-.659 1.69h-9.181v-.417c-.004-1.112.044-1.747 1.324-2.043 1.402-.324 2.787-.613 2.121-1.841-1.972-3.637-.562-5.699 1.555-5.699 2.077 0 3.521 1.985 1.556 5.699-.647 1.22.688 1.51 2.121 1.841.672.155 1 .407 1.163.77zm-.815 3.69h-11.025v-14h20v7.5c.749.312 1.424.763 2 1.316v-10.816h-24v18h13.5c-.26-.623-.421-1.296-.475-2zm6.975-9h-4v2h4v-2zm-4-1h4v-2h-4v2zm3.5 5c-2.486 0-4.5 2.015-4.5 4.5s2.014 4.5 4.5 4.5c2.484 0 4.5-2.015 4.5-4.5s-2.016-4.5-4.5-4.5zm-.469 6.484l-1.688-1.637.695-.697.992.94 2.115-2.169.697.696-2.811 2.867z"/></svg>`)
        iconContainer.classList.add('if-user-entered');
    }     
}