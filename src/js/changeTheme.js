const body = document.querySelector('body');
const btnLightTheme = document.querySelector('.theme__btn--light');
const btnDarkTheme = document.querySelector('.theme__btn--dark');
const footer = document.querySelector('footer');
const modal = document.querySelector('.modal');
const modalFooter = document.querySelector('.footer-modal');
const modalDataElementWhite = document.querySelector('.modal__data--element--white');
const footerModalText = document.querySelector('.footer-modal__text');





btnLightTheme.addEventListener('click', setLightTheme);
btnDarkTheme.addEventListener('click', setDarkTheme);

let currentTheme = '';

if (localStorage.getItem('currentTheme') === 'dark') {
   setDarkTheme();
}

function setLightTheme() {
   btnDarkTheme.style.display = "block";
   btnLightTheme.style.display = "none";
   body.classList.remove('dark');
   footer.classList.remove('dark');
   modalFooter.style.backgroundColor = "white";
   footerModalText.style.color = "#545454";
   modal.style.backgroundColor = "white";
   modalDataElementWhite.style.backgroundColor = "white";
   currentTheme = localStorage.setItem('currentTheme', 'light');
}

function setDarkTheme() {
   btnLightTheme.style.display = "block";
   btnDarkTheme.style.display = "none";
   body.classList.add('dark');
   footer.classList.add('dark');
   modalFooter.style.backgroundColor = "#333";
   footerModalText.style.color = "white";
   modal.style.backgroundColor = "#333";
   modalDataElementWhite.style.backgroundColor = "transparent";
   currentTheme = localStorage.setItem('currentTheme', 'dark');
}




// changeThemeButtons.forEach(button => {
//    button.addEventListener('click', function () {
//       let theme = this.dataset.theme;
//       applyTheme(theme);
//    })
// })

// function applyTheme(theme) {
//    if (theme === 'dark') {
//       changeThemeButtons[1].style.display = "none";
//       changeThemeButtons[0].style.display = "block";
//       body.classList.add('dark');
//    }
//    else {
//       changeThemeButtons[0].style.display = "none";
//       changeThemeButtons[1].style.display = "block";
//       body.classList.remove('dark');
//    }
// }