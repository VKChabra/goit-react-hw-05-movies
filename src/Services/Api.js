import api_key from './ApiKey';

const fetchFilm = filmId => {
  try {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}?api_key=${api_key}`);
  } catch (error) {
    console.log(error);
  }
};
export default fetchFilm;
