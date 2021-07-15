import axios from 'axios';
const API_KEY = "5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8";

async function getTopStories (section) {
    
  const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`)
  return response.data.results;
};

async function getGenres() {
  const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`);
  return response.data.results;

}
async function getBooks (genre) {
   const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=${API_KEY}`)
  return response.data.results;
};


async function getMovieCritics() {
  const response = await axios.get(`https://api.nytimes.com/svc/movies/v2//critics/all.json?api-key=${API_KEY}`)
  return response.data.results;
}

async function getMovieReviews(critic) {
  // https://api.nytimes.com/svc/movies/v2/reviews/search.json?reviewer=A.%20O.%20Scott&
  const response = await axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?reviewer=${critic}&api-key=${API_KEY}`)
  return response.data.results;
}

export {
  getBooks,
  getTopStories,
  getGenres,
  getMovieCritics,
  getMovieReviews
}
   