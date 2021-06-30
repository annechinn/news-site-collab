const connectDB = require('./db');
const axios = require('axios');
const mongoose = require('mongoose');

require('./models/User');
require('./models/Article');
require('./models/Comment');
require('./models/Topic');

async function getArticles (section) {
    
  const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=5Vd8O8baGS3WEG1eQVAaS2mG6K0VyHH8`)
  return response.data.results;
};

connectDB();

const Article = mongoose.model('Article');
//const Topic = mongoose.model('Topic');

async function importArticles(topic) {
  const articles = await getArticles(topic);
  for (let i=0;i<5;++i) {
    const article = articles[i];
    const imageURL = article.multimedia.length>0?article.multimedia[0].url:'';
    var newArticle = new Article({
      title: article.title,
      abstract: article.abstract,
      body: 'Todo',
      imageURL: imageURL,
      author: new mongoose.Types.ObjectId("60d24aeaeacbc4390430134c"),
      topic: new mongoose.Types.ObjectId("60d2506cb4f2084cb4ee9512")
    });
    await newArticle.save(); 
  }

}

importArticles('science');

