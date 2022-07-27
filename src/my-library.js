import './js/changeThemeLibrary';
// Основний файл сторінки My library. Сюди будуть імпортуватися окремі функції з ./js/my-library
// Додавайте ці окремі файли саме у ту папку і експортуйте сюди.
import './js/index/signInBtn';
import './js/modal-close';
import './js/modal-open';
import './js/footer';

import { drawGallery } from './js/drawGallery';
import { drawPagination } from './js/drawPagination';
import { calcNewPgNum } from './js/calcNewPgNum';
import { addModalMcp } from './js/modalMarkup';

const queueBtnRef = document.querySelector('#queue');
const watchedBtnRef = document.querySelector('#watched');
const buttonsRef = document.querySelector('.header__buttons');
const galleryRef = document.querySelector('.gallery');
const paginationRef = document.querySelector('#pagination');
const pageNumRef = document.querySelector('#page-numbers');
const modalMcpContainer = document.querySelector('.modal__data--content');

const MOVIES_PER_PAGE = 20;
const LOCAL_MOVIES_KEY = 'localMovies';
//
const STORAGE_KEYS = {
  watched: 'watchedAll',
  queue: 'queueAll',
};
//
const LOCAL_MOVIES_RULES = {
  watched: 'watched',
  queue: 'queue',
};
//

/* Rendering Initial Values*/
reDrawLocalMovies(LOCAL_MOVIES_RULES.watched, 1);

/*
 * ===================
 */

/* MAIN Content Rendering Function */
function reDrawLocalMovies(rules, pgNum) {
  // Get movies Full List from needed Local Storage
  const movies = JSON.parse(localStorage.getItem(STORAGE_KEYS[rules]));

  if (movies) {
    const localMovies = {
      page: pgNum,
      total_pages: movies.total_pages,
      total_results: movies.total_results,
      results: movies.results.slice(
        MOVIES_PER_PAGE * (pgNum - 1),
        MOVIES_PER_PAGE * pgNum
      ),
      rules,
    };

    localStorage.setItem(LOCAL_MOVIES_KEY, JSON.stringify(localMovies));

    drawGallery(galleryRef, localMovies.results);
    drawPagination(pageNumRef, pgNum, localMovies.total_pages);

    paginationRef.addEventListener('click', onPgNumClk);
    galleryRef.addEventListener('click', onGalleryClk);
  } else {
    drawEmptyGallery();
  }

  window.scrollTo(0, 0);
  buttonsRef.addEventListener('click', onBtnClk);
}

function drawEmptyGallery() {
  galleryRef.innerHTML = '<h1 style="margin-left: auto; margin-right: auto;">Нour gallery is empty, please add a movie to the gallery</h1>';
  pageNumRef.innerHTML = '';
}

function onBtnClk(e) {
  buttonsRef.removeEventListener('click', onBtnClk);

  if (e.target.id === 'watched') {
    watchedBtnRef.classList.add('btn--is-active');
    queueBtnRef.classList.remove('btn--is-active');

    reDrawLocalMovies(LOCAL_MOVIES_RULES.watched, 1);
  } else {
    watchedBtnRef.classList.remove('btn--is-active');
    queueBtnRef.classList.add('btn--is-active');

    reDrawLocalMovies(LOCAL_MOVIES_RULES.queue, 1);
  }
}

function onGalleryClk(e) {
  if (e.target.closest('.card')) {
    const movieNumberEl = e.target.closest('.card');
    // console.log(e.target);
    // console.log(movieNumberEl);
    console.log(
      `%c${movieNumberEl.dataset.movie}`,
      'color: yellow; background-color: red; display: inline-block; padding: 5px; font-weight: bold;'
    );

    const movie = JSON.parse(localStorage.getItem(LOCAL_MOVIES_KEY)).results[
      movieNumberEl.dataset.movie
    ];
    modalMcpContainer.insertAdjacentHTML('afterbegin', addModalMcp(movie));

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

function onPgNumClk(e) {
  if (!e.target.closest('[data-page]')) {
    return;
  }

  pageNumRef.removeEventListener('click', onPgNumClk);

  const targetPageNum = e.target.closest('[data-page]').dataset.page;

  // if (!targetPageNum) {
  //     return;
  // }

  const localMovies = JSON.parse(localStorage.getItem(LOCAL_MOVIES_KEY));

  const currentPageNum = localMovies.page;
  const totalPages = localMovies.total_pages;

  const newPageNum = calcNewPgNum(currentPageNum, targetPageNum, totalPages);

  reDrawLocalMovies(localMovies.rules, newPageNum);
}
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
    storageMovies.total_results -= 1;
    storageMovies.total_pages = Math.ceil(
      storageMovies.total_results / MOVIES_PER_PAGE
    );
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

// GET TRENDING
// const MEDIA_TYPE = 'movie';
// const TIME_WINDOW = 'day'; // day | week
// https://api.themoviedb.org/3/trending/{MEDIA_TYPE}/{TIME_WINDOW}?api_key=<<api_key>>
//

// GET SEARCH QUERY
//
// https://api.themoviedb.org/3/search/movie?api_key=b282a22ae665f5f17a32a077013d243c&query=cat&page=1&include_adult=false
