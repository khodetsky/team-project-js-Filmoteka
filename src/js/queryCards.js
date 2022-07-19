import { fetchQueryMovies, resetPage, page } from './queryFetch';
import { createMovieCards } from './queryMarkup';
import { target, spinner } from './spinner.js';

const gallery = document.querySelector('.gallery-home');
const formSearch = document.querySelector('#search-form');
const textError = document.querySelector('.header__text-error');

formSearch.addEventListener('submit', submitMoviesSearch);
let searchMovie = '';

async function submitMoviesSearch(e) {
   textError.classList.add('is-hidden');
   spinner.spin(target);
   e.preventDefault();
   window.scrollTo(0, 0);
   resetPage();

   searchMovie = (formSearch.elements.searchQuery.value).trim();;

   if (searchMovie === '') {
      spinner.stop();
      textError.classList.remove('is-hidden');
   }
   
   await fetchQueryMovies(searchMovie).then(({ movies }) => {
      if (movies.length === 0) {
         spinner.stop();
         textError.classList.remove('is-hidden');
      }
      gallery.innerHTML = createMovieCards(movies);
   })
   formSearch.reset();
   setTimeout(() => spinner.stop(), 400);
}