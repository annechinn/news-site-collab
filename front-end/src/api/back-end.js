import axios from 'axios';

const PORT=5000;
const SERVER_URL_ROOT = `http://localhost:${PORT}/api`;

async function getTopics() {
  const response = await axios.get(`${SERVER_URL_ROOT}/topics`);
  return response.data;
}

async function getTopic(topicId) {
  const response = await axios.get(`${SERVER_URL_ROOT}/topics/${topicId}`);
  return response.data;
}

async function getArticle(articleId) {
  const response = await axios.get(`${SERVER_URL_ROOT}/articles/${articleId}`);
  return response.data;
}

async function getArticles() {
  const response = await axios.get(`${SERVER_URL_ROOT}/articles/`);
  return response.data;
}

async function getArticlesForTopic(topicId) {
  const response = await axios.get(`${SERVER_URL_ROOT}/articles/topic/${topicId}`);
  return response.data;
}


export {
  getArticles,
  getArticlesForTopic,
  getArticle,
  getTopics,
  getTopic
}