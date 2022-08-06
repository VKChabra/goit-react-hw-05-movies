import api_key from './ApiKey';

export const fetchTrendingMovies = async () => {
  try {
    return await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`
    ).then(response => {
      if (response.ok === true) {
        return response.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchFilm = async query => {
  try {
    return await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
    ).then(response => {
      if (response.ok === true) {
        return response.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmDetails = async filmId => {
  try {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}?api_key=${api_key}`
    ).then(response => {
      if (response.ok === true) {
        return response.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmCast = async filmId => {
  try {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}/credits?api_key=${api_key}`
    ).then(response => {
      if (response.ok === true) {
        return response.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchFilmReviews = async filmId => {
  try {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${filmId}/reviews?api_key=${api_key}`
    ).then(response => {
      if (response.ok === true) {
        return response.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};
