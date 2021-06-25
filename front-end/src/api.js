import axios from 'axios';


const Articles = {
  nytTopStories: async (section='home') => {
    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8`);
    return response.data.results;
  }
};

export default {
  Articles
};