const API_KEY = 'f81980ff410e46f422d64ddf3a56dddd';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const api = {
  async getPopularMovies(page = 1) {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`
    );
    return response.json();
  },

  async searchMovies(query: string, page = 1) {
    const response = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
    );
    return response.json();
  },

  getImageUrl(path: string) {
    return `${IMAGE_BASE_URL}${path}`;
  }
};