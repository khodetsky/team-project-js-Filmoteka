import { genres } from './genres.json';



export const createMovieCards = (movies) => {
   return movies.reduce((acc, { poster_path, original_title, release_date, genre_ids, vote_average }) => {

      const movieGenresList = genre_ids.length > 0
         ? getMovieGenresList(genre_ids).join(', ')
         : "";
      const year = release_date ? release_date.slice(0, 4) : "";
      const separator = movieGenresList && year ? ' | ' : "";

      acc += `
      <li class="card">
        <a href="#">
         <img class="card__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="poster" />
         <p class="card__title">${original_title}</p>
         <div class="card__text-container">
           <p class="card__text">${movieGenresList} ${separator} ${year}</p>
           <div class="card__rating-box" id="card-rating">
             <p class="card__rating-text">${vote_average}</p>
           </div>
         </div>
        </a>
      </li>`
      return acc;
   }, '')
}

function getMovieGenresList(genresIdList) {
   let movieGenres = genres.reduce((acc, { id, name }) => {
      if (genresIdList.includes(id)) {
         acc.push(name)
      }
      return acc;
   }, []);
   if (movieGenres.length > 3) {
      movieGenres = movieGenres.slice(0, 2);
      movieGenres.push('Other');
   }
   return movieGenres;
}

export async function addRatingColor() {
   const cardRatingBox = document.querySelectorAll('.card__rating-text');
   for (box of cardRatingBox) {
      if (box.textContent < 3) {
         box.closest('#card-rating').classList.add('red-box')
      } else if (box.textContent >= 3 && box.textContent < 5) {
         box.closest('#card-rating').classList.add('orange-box')
      } else if (box.textContent >= 5 && box.textContent < 7) {
         box.closest('#card-rating').classList.add('yellow-box')
      } else {
         box.closest('#card-rating').classList.add('green-box')
      }
   }
}


