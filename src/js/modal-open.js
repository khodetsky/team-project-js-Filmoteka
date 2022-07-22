import {
  closeModalBtn,
  closeModalEscape,
  closeModalClick,
  modal,
  btnClose,
  backdrop,
} from './modal-close';
import { genres } from './genres.json';
const gallery = document.querySelector('.gallery');
// const poster = document.querySelector('#modal-img');
// const filmName = document.querySelector('.modal__data--title');
// const vote = document.querySelector('#modal-vote');
// const votes = document.querySelector('#modal-votes');
// const popularity = document.querySelector('#modal-popularity');
// const originTitle = document.querySelector('#modal-orgtitle');
// const ganre = document.querySelector('#modal-genre');
// const about = document.querySelector('#modal-p');
// let card;
// let id;
// let filmData = {};

// вішаємо слухача для відкриття модалки з повною інформацією про фільм
gallery.addEventListener('click', e => {
  const onClickElement = e.target;
  const card = onClickElement.closest('.card');
  if ((card != null) & backdrop.classList.contains('hidden')) {
    id = card.dataset.id;
    modalVisible();
    // getFilmData(id);
    setTimeout(() => {
      modalClose();
    }, 100);
  }
});

// робимо модалку фільму видимою
function modalVisible() {
  console.log('відкриття модалки');
  backdrop.classList.remove('hidden');
}
// вішаємо слухачів для закриття модалки
function modalClose() {
  if (!backdrop.classList.contains('hidden')) {
    console.log('вішаємо слухачів для закриття модалки');
    btnClose.addEventListener('click', closeModalBtn);
    document.addEventListener('keyup', closeModalEscape);
    document.addEventListener('click', closeModalClick);
  } else {
    console.log('щось не так з слухачами для закриття модалки');
    return;
  }
}

// підгрузка інформації про фільм в модалку
// function getFilmData(id) {
//   const filmsData = JSON.parse(localStorage.getItem('moviesInMain'));
//   console.log(`Шукаємо дані про фільм в LocalStorage по id фільму ${id}`);
//   filmsData.forEach(film => {
//     if (film.id == id) {
//       filmData = film;
//       modalRender(filmData);
//     } else {
//       return;
//     }
//   });
// }

// function modalRender(film) {
//   console.log('заповнюємо модалку інформацією про фільм');
//   poster.src = `https://image.tmdb.org/t/p/w500/${film.poster_path}`;
//   filmName.textContent = film.title;
//   vote.textContent = film.vote_average;
//   votes.textContent = film.vote_count;
//   popularity.textContent = film.popularity;
//   originTitle.textContent = film.original_title;
//   // const ganre = film.;
//   about.textContent = film.overview;
// }
