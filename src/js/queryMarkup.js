import { genres } from './genres.json';



export const createMovieCards = (movies) => {
   return movies.reduce((acc, { poster_path, original_title, release_date, genre_ids }) => {

      const movieGenresList = genre_ids.length > 0
         ? getMovieGenresList(genre_ids).join(', ')
         : "";
      const year = release_date ? release_date.slice(0, 4) : "";
      const separator = movieGenresList && year ? ' | ' : "";

      acc += `<li class="card__item">
  <a href="#">
    <img
      class="card__img"
      src="https://image.tmdb.org/t/p/w500/${poster_path}"
      alt="poster"
    />
    <div class="card-div">
      <p class="card-div__text">
        <span class="card-div__span">${original_title}</span
        ><br />${movieGenresList} ${separator} ${year}
      </p>
      <div class="card-div__div">
        <p class="card-div__raiting">8.0</p>
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


