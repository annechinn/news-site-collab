

const PORT=5000;
const SERVER_URL_ROOT = `http://localhost:${PORT}/api`;

async function getTopics() {
  const response = await axios.get(`${SERVER_URL_ROOT}/topics`);
  return response.data;
}

async function getArticleById(articleId) {
  const response = await axios.get(`${SERVER_URL_ROOT}/articles/${articleId}`);
  return response.data;
}

function getHTMLForArticle(article){
  
  return `
  <div class="article">
    <h2>${article.title}</h2>
    <div class="profile">Written by ${article.author.firstName} ${article.author.lastName}</div>
    <p>${article.abstract}</p>
    <img src='${article.imageURL}'>
  </div>
  `
}

async function showTopic(topic) {
  const div = document.getElementById('main-content');
  div.style.color = topic.color;
  const article = await getArticleById(topic.showcaseArticle);
  div.innerHTML = getHTMLForArticle(article);
}

async function initTopicButtons() {

  const topics = await getTopics();
  topics.forEach(x=>{
    const button = document.getElementById(`${x.name}-link`);
    button.style.backgroundColor = x.color;
    button.addEventListener('click', (event)=> {
      event.preventDefault();
      showTopic(x);
    });
  });
}

initTopicButtons();