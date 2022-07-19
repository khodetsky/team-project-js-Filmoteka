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
      return console.log('No matches found for your query. Enter the correct movie name.');
   }
   
   await fetchQueryMovies(searchMovie).then(({ movies }) => {
      if (movies.length === 0) {
         spinner.stop();
         textError.classList.remove('is-hidden');
         return console.log('The search result is unsuccessful. Enter the correct movie title');  // Поставити Нотіфікашку
      }
      gallery.innerHTML = createMovieCards(movies);
   })
   formSearch.reset();
   setTimeout(() => spinner.stop(), 400);
}