const body = document.querySelector('body');
const btnLightTheme = document.querySelector('.theme__btn--light');
const btnDarkTheme = document.querySelector('.theme__btn--dark');
const footer = document.querySelector('footer');
const modal = document.querySelector('.modal');
const modalFooter = document.querySelector('.footer-modal');
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
   // modal.style.backgroundColor = "white";
   currentTheme = localStorage.setItem('currentTheme', 'light');
}

function setDarkTheme() {
   btnLightTheme.style.display = "block";
   btnDarkTheme.style.display = "none";
   body.classList.add('dark');
   footer.classList.add('dark');
   modalFooter.style.backgroundColor = "#333";
   footerModalText.style.color = "white";
   // modal.style.backgroundColor = "#333";
   currentTheme = localStorage.setItem('currentTheme', 'dark');
}
