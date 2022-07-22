const body = document.querySelector('body');
const btnLightTheme = document.querySelector('.theme__btn--light');
const btnDarkTheme = document.querySelector('.theme__btn--dark');

btnLightTheme.addEventListener('click', setLightTheme);
btnDarkTheme.addEventListener('click', setDarkTheme);

let currentTheme = '';

if (localStorage.getItem('currentTheme') === 'dark') {
   console.log('currentTheme = dark');
   setDarkTheme();
}

function setLightTheme() {
   btnDarkTheme.style.display = "block";
   btnLightTheme.style.display = "none";
   body.classList.remove('dark');
   currentTheme = localStorage.setItem('currentTheme', 'light');
}

function setDarkTheme() {
   btnLightTheme.style.display = "block";
   btnDarkTheme.style.display = "none";
   body.classList.add('dark');
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