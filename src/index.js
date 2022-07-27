// Основний файл першої сторінки. Сюди будуть імпортуватися окремі функції з ./js/index
// Додавайте ці окремі файли саме у ту папку і експортуйте сюди.
import './js/preloader';
import './js/spinner';

import './js/modal-close';
import './js/modal-open';
import './js/filter';

import './js/footer';
import './js/changeTheme';

import { getGenres, getMovies } from './js/getMovies';
import { drawGallery } from './js/drawGallery';
import { drawPagination } from './js/drawPagination';
import { calcNewPgNum } from './js/calcNewPgNum';
import { showErrorMsg, hideErrorMsg } from './js/errorMessage';
import { target, spinner } from './js/spinner.js';
import { addModalMcp } from './js/modalMarkup';

const galleryRef = document.querySelector('.gallery');
const paginationRef = document.querySelector('#pagination');
const pageNumRef = document.querySelector('#page-numbers');
const formRef = document.querySelector('.form');
const modalMcpContainer = document.querySelector('.modal__data--content');

const MOVIES_PER_PAGE = 20;
//
const MOVIES_KEY = 'movies';
//
const GET_MOVIES_RULES = {
  genres: 'genres',
  trends: 'trends',
  search: 'search',
};
//
const STORAGE_KEYS = {
  watched: 'watchedAll',
  queue: 'queueAll',
};

getAndRenderInitialValues();

formRef.addEventListener('submit', onFormSubmit);

/*
 * ===================
 */
/* Getting and Rendering Initial Values*/
async function getAndRenderInitialValues() {
  const genres = await getGenres();
  await localStorage.setItem(
    'genres',
    JSON.stringify(genres.sort((a, b) => a.id - b.id))
  );

  await reDrawMovies(GET_MOVIES_RULES.trends, 1);
}
/* MAIN Content Rendering Function */
async function reDrawMovies(rules, pgNum, queryString) {
  hideErrorMsg();

  const movies = await getMovies(rules, pgNum, queryString);
  if (await isNoMovies(movies)) {
    showErrorMsg();
    return;
  }

  await localStorage.setItem(
    MOVIES_KEY,
    JSON.stringify({ ...movies, rules, search_string: queryString })
  );

  await drawGallery(galleryRef, movies.results);
  await drawPagination(
    pageNumRef,
    movies.page,
    movies.total_pages > 20 ? 20 : movies.total_pages
  );

  await paginationRef.addEventListener('click', onPgNumClk);
  await galleryRef.addEventListener('click', onGalleryClk);

  await window.scrollTo(0, 0);
}
/* Check for an empty list of movies */
function isNoMovies(movies) {
  return !movies.total_results;
}
/* = */
function onFormSubmit(e) {
  e.preventDefault();
  spinner.spin(target);
  const searchString = e.target.elements.input.value;
  console.log('search: ', searchString);

  if (!searchString) {
    spinner.stop();
    return;
  }

  reDrawMovies(GET_MOVIES_RULES.search, 1, searchString);
  setTimeout(() => spinner.stop(), 400);
}
/* = */
function onGalleryClk(e) {
  if (e.target.closest('.card')) {
    const movieNumberEl = e.target.closest('.card');

    console.log(
      `%c${movieNumberEl.dataset.movie}`,
      'color: yellow; background-color: red; display: inline-block; padding: 5px; font-weight: bold;'
    );

    const movie = JSON.parse(localStorage.getItem(MOVIES_KEY)).results[
      movieNumberEl.dataset.movie
    ];
    modalMcpContainer.insertAdjacentHTML('afterbegin', addModalMcp(movie));
    // console.log(movieNumberEl.dataset.movie);
    // console.log(movie);

    //  ===|     function CALLING_A_MODAL_WINDOW_BY_CLICK_ON_A_MOVIE_IN_THE_GALLERY () {}   |====

    // Add movie to local storage - used from modal windoow
    // addMovieToStorage('watched', movie);

    const btnToWatched = document.querySelector('#addToWatched');
    const btnToQueue = document.querySelector('#addToQueue');
    btnStyle('watched', movie, movie.id, btnToWatched);
    btnStyle('queue', movie, movie.id, btnToQueue);

    btnToWatched.addEventListener('click', () => {
      addMovieToStorage('watched', movie, movie.id, btnToWatched);
    });
    btnToQueue.addEventListener('click', () => {
      addMovieToStorage('queue', movie, movie.id, btnToQueue);
    });
  }
}

/* = */
function onPgNumClk(e) {
  if (!e.target.closest('[data-page]')) {
    return;
  }

  const targetPageNum = e.target.closest('[data-page]').dataset.page;

  const movies = JSON.parse(localStorage.getItem(MOVIES_KEY));

  const currentPageNum = movies.page;
  const totalPages = movies.total_pages;

  const newPageNum = calcNewPgNum(
    currentPageNum,
    targetPageNum,
    totalPages > 20 ? 20 : totalPages
  );

  reDrawMovies(movies.rules, newPageNum, movies.search_string);
}
/*  Add movie to local storage - Used from Modal Window */
function addMovieToStorage(storageKey, movie, movieId, btn) {
  console.log(
    'addMovieToStorage started... storageKey: ',
    storageKey,
    'movie: ',
    movie
  );
  console.log('STORAGE_KEYS[storageKey]: ', STORAGE_KEYS[storageKey]);

  if (!isMovieInStorage(storageKey, movie.id)) {
    let storageMovies = JSON.parse(
      localStorage.getItem(STORAGE_KEYS[storageKey])
    );
    if (!storageMovies) {
      storageMovies = {
        results: [],
        total_results: 0,
        total_pages: 0,
      };
    }

    storageMovies.results.push(movie);
    storageMovies.total_results += 1;
    storageMovies.total_pages = Math.ceil(
      storageMovies.total_results / MOVIES_PER_PAGE
    );

    localStorage.setItem(
      STORAGE_KEYS[storageKey],
      JSON.stringify(storageMovies)
    );
    btn.classList.add('btn__standart--orange');
    btn.textContent = `delete from ${storageKey}`;
  } else {
    let storageMovies = JSON.parse(
      localStorage.getItem(STORAGE_KEYS[storageKey])
    );
    let storageMovie = storageMovies.results.find(
      movieLS => movieLS.id === movieId
    );
    let movieIndex = storageMovies.results.indexOf(storageMovie);
    storageMovies.results.splice(movieIndex, 1);
    localStorage.setItem(
      STORAGE_KEYS[storageKey],
      JSON.stringify(storageMovies)
    );

    btn.classList.remove('btn__standart--orange');
    btn.textContent = `add to ${storageKey}`;
  }
}

function isMovieInStorage(storageKey, movieId) {
  const storageMovies = JSON.parse(
    localStorage.getItem(STORAGE_KEYS[storageKey])
  );
  if (!storageMovies) return false;

  return storageMovies.results.find(movie => movie.id === movieId)
    ? true
    : false;
}

function btnStyle(storageKey, movie, movieId, btn) {
  if (isMovieInStorage(storageKey, movie.id)) {
    btn.classList.add('btn__standart--orange');
    btn.textContent = `delete from ${storageKey}`;
  }
}

// ----------------------------------------------------

const openDropBtn = document.querySelector('.filter__dropdown-button');
const dropList = document.querySelector('.filter__dropdown-list');

//    Клик по кнопке открыть/закрыть
openDropBtn.addEventListener('click', function (e) {
  if (dropList.classList.contains('filter__visible')) {
    dropList.classList.remove('filter__visible');
  } else {
    openDropBtn.innerText = this.innerText;
    openDropBtn.focus();
    dropList.classList.remove('filter__visible');
    dropList.classList.add('filter__visible');
    dropList.addEventListener('click', onDropListClick);
  }
});

function onDropListClick(e) {
  reDrawMovies('filter', 1, e.target.dataset.value);
}

// Клик за пределами списка закрывает список
document.addEventListener('click', function (e) {
  if (e.target !== document.querySelector('.filter__dropdown-button')) {
    dropList.classList.remove('filter__visible');
    openDropBtn.classList.remove('filter__dropdown-button-active');
  }
});
