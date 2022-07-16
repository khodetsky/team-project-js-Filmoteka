const API_KEY = 'e5d28fcb297e4a498118afca6ed615cb'; 
const BASE_IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';
const PATH_TO_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
let page = 1;

const gallery = document.querySelector('.gallery-home');
const button = document.querySelector("#button");

createArrOfGenres();

async function getGenres() {
    try {
      const response = await fetch(`${PATH_TO_GENRES}`);
        const genres = await response.json();
        return genres;
    } catch (error) {} 
};

 export function createArrOfGenres() {
    getGenres().then(response => {
        const getGenresArr = response;
        const getGenresToString = JSON.stringify(getGenresArr);
        localStorage.setItem('genres-id', getGenresToString);
    });
};

export async function getMovies() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}`);
        const movies = await response.json();
        // console.log(movies);
        return movies;
  } catch (error) {}   
};

 function nextPage() {
    page += 1;
    getMoviesMcp();
}

button.addEventListener('click', nextPage);

export function getMoviesMcp() {
    getMovies().then((response) => {
        // console.log(response.results);
        gallery.innerHTML = "";
        gallery.insertAdjacentHTML('beforeend', marcup(response.results));
    })
};

// let qwe = [];

function marcup(movies) {
    // const genresParsed = JSON.parse(localStorage.getItem('genres-id'));

    // console.log(genresParsed.genres);

    const marcup = movies.map(movie => {
        // const normalGenres = movie.genre_ids.map(genre => {
        //     for (const genreParsed of genresParsed.genres) {
        //         if (genreParsed.id === genre) {
        //             qwe.splice(0, 0, genreParsed.name);
        //         }
        //     }
        // })
    

        return `<li class="gallery-home__card"><img src="${BASE_IMAGE_PATH}${movie.backdrop_path}" alt="best movie"/>
                <p></p>
                </li>`
    }).join("");
     return marcup;
};