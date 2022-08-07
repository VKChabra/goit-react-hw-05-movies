import axios from 'axios';
import API_KEY from './apiKey';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function searchMovie(query) {
  try {
    const response = await axios.get(
      `/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieDetails(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieCast(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(
      `/movie/${movieId}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
