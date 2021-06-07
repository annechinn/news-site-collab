
let state = {
  lastButtonClicked: null
}

function getHTMLForArticleSummary(articleData) {
  let author = authorsData.find(x=>x.id===articleData.authorId);

  return `
  <div class="article">
  <h2>${articleData.title}</h2>
  <div class="profile">Written by ${author.firstName} ${author.lastName}</div>
  <p>${articleData.abstract}</p>
  <img src='${articleData.imageURL}'>
  </div>
  `;
}

function getHTMLForTopicSummary(topicData) {

  let topicArticles = articlesData.filter(x=>x.topicId===topicData.id);
  let htmlText = "";
  topicArticles.forEach(x=>{
    htmlText+=getArticleSummaryHTMLText(x);
  });

  return htmlText;
}

function getHTMLForShowcaseArticleSummary(topicData) {
  let showcaseArticle = 
      articlesData.find(x=>x.id===topicData.showcaseArticleId);

  return getHTMLForArticleSummary(showcaseArticle);
}

function showTopic(topicData) {
  let element = document.getElementById("main-content");
  element.style.color = topicData.color;
  element.innerHTML = getHTMLForShowcaseArticleSummary(topicData);
}

function initTopic(topicData) {
 
  // set button color to topic color
  let button = document.getElementById(`${topicData.name}-link`);
  button.style.backgroundColor = topicData.color;

  // register click event handler
  button.addEventListener("click", ()=>{
    if (state.lastButtonClicked) {
      state.lastButtonClicked.classList.remove('active');
    }
    state.lastButtonClicked = button;
    button.classList.add('active');
    showTopic(topicData);
  });
}

function initTopics() {
  topicsData.forEach(x=>initTopic(x));
}

initTopics();