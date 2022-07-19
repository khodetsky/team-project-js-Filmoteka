import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const DEFAULT_PAGE = 1;
export let page = DEFAULT_PAGE;
export const resetPage = () => {
  page = DEFAULT_PAGE;
}

export const fetchQueryMovies = async (searchImg) => {
  const searchParams = new URLSearchParams({
    api_key: 'bc6e7870ec253d65c694f75010bd4e0b',
    language: 'en-US',
    page,
    include_adult: 'false',
    query: searchImg,
  });

  return await axios
    .get(`/search/movie?${searchParams}`)
     .then(response => {
      page += 1;
      return {
        movies: response.data.results,
      }
    })
}