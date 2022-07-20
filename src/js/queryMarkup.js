import { genres } from './genres.json';



export const createMovieCards = (movies) => {
   return movies.reduce((acc, { poster_path, original_title, release_date, genre_ids, vote_average, id }) => {

      const isImg = `<img class="card__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" loading="lazy" alt="Poster for film ${original_title}" data-id="${id}"/>`;

      const noImg = `<img class="card__img" src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png" loading="lazy" alt="No poster available"/>`

      const resultImg = poster_path ? isImg : noImg;

      


      const movieGenresList = genre_ids.length > 0
         ? getMovieGenresList(genre_ids).join(', ')
         : "";
      const year = release_date ? release_date.slice(0, 4) : "";
      const separator = movieGenresList && year ? ' | ' : "";

      acc += `
      <li class="card"  data-id="${id}">
        <a href="#">
         ${resultImg}
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


