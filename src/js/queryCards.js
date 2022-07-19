import { fetchQueryMovies, resetPage, page } from './queryFetch';
import { createMovieCards, addRatingColor } from './queryMarkup';
import { target, spinner } from './spinner.js';

const gallery = document.querySelector('.gallery');
const formSearch = document.querySelector('#search-form');

formSearch.addEventListener('submit', submitMoviesSearch);
let searchMovie = '';

async function submitMoviesSearch(e) {
   spinner.spin(target);
   e.preventDefault();
   window.scrollTo(0, 0);
   resetPage();

   searchMovie = formSearch.elements.searchQuery.value;

   if (searchMovie === '') {
      spinner.stop();
      return console.log('NOTIFICATION => Empty field');  // Поставити Нотіфікашку
   }
   
   await fetchQueryMovies(searchMovie).then(({ movies }) => {
      if (movies.length === 0) {
         spinner.stop();
         return console.log('NOTIFICATION => No query results');  // Поставити Нотіфікашку
      }
      gallery.innerHTML = createMovieCards(movies);
      addRatingColor();
   })
   formSearch.reset();
   setTimeout(() => spinner.stop(), 400);
}