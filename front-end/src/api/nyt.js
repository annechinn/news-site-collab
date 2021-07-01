import axios from 'axios';

async function getTopStories (section) {
    
  const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8`)
  return response.data.results;
};

async function getBooks (genre) {
    
  const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${genre}.json?api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8`)
  return response.data.results;
};

export {
  getBooks,
  getTopStories
}
   