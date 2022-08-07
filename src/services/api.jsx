import api_key from './apiKey';

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

export const searchMovie = async query => {
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

export const fetchMovieDetails = async movieId => {
  try {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}`
    ).then(response => {
      if (response.ok === true) {
        return response.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${api_key}`
    ).then(response => {
      if (response.ok === true) {
        return response.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${api_key}`
    ).then(response => {
      if (response.ok === true) {
        return response.json();
      }
    });
  } catch (error) {
    console.log(error);
  }
};
