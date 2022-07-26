import { createListOfGenres } from './drawGallery';
import { IMG_BASE_URL, IMG_FILE_SIZE } from './basedConst';

export function addModalMcp(movie) {
  return `
        <div class="modal__data--poster">
          <img src="${IMG_BASE_URL}${IMG_FILE_SIZE}${
    movie.poster_path
  }" alt="film" />
        </div>
        <div class="modal__data--description">
          <h1 class="modal__data--title">${movie.title}</h1>
          <table class="modal__data--table">
            <tr>
              <th>Vote / Votes</th>
              <td>
                <span class="modal__data--element modal__data--element--orange"
                  >${movie.vote_average.toFixed(1)}</span
                >
                /
                <span class="modal__data--element modal__data--element--white">${
                  movie.vote_count
                }</span>
              </td>
            </tr>
            <tr>
              <th>Popularity</th>
              <td>${movie.popularity}</td>
            </tr>
            <tr>
              <th>Original Title</th>
              <td>${movie.original_title}</td>
            </tr>
            <tr>
              <th>Genre</th>
              <td>${createListOfGenres(movie.genre_ids)}</td>
            </tr>
          </table>
          <div>
            <h2 class="modal__data--title--about">about</h2>
            <div class="modal__data--text">
              <p>${movie.overview}</p>
            </div>
          </div>
          <div class="modal__data--add">
              <button
              id ="addToWatched"
                class="modal__btn btn__standart"
                type="button"
              >
                add to watched
              </button>
              <button id="addToQueue" class="modal__btn btn__standart" type="button">
                add to queue
              </button>
            </div>
        </div>`;
}
