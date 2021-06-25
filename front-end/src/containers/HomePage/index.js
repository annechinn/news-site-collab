import React, {useEffect, useState} from 'react';
import './style.css';
import api from '../../api';

const topics = [
  { 
    id: 1,
    name: 'technology',
    color: '#009cff', 
    title: 'Technology',
    showcaseArticleId: 16
  }, 
  { 
    id: 2,
    name: 'science',
    color: '#3bd142', 
    title: 'Science',
    showcaseArticleId: 20
  },
  { 
    id: 3,
    name: 'food',
    color: '#d1483b', 
    title: 'Food',
    showcaseArticleId: 8
  },
  { 
    id: 4,
    name: 'arts',
    color: '#a66bbe', 
    title: 'Arts' ,
    showcaseArticleId: 13
  },
  { 
    id: 5,
    name: 'sports',
    color: '#f99500', 
    title: 'Sports',
    showcaseArticleId: 10
  }
];

const topic = topics.find(x=>x.name==='sports');

function HomePage() {
  const [articles, setArticles] = useState([]);

  const getArticles = async (topic) => {
    const articles = await api.Articles.nytTopStories(topic.name);
    setArticles(articles);
  }

  useEffect(() => {
    getArticles(topic);
  }, []);

  const articlesJSX = articles.map(x=>getHTMLForArticle(x, topic));
  return (
    <main>
      <section id="article-grid" class="articles">
        {articlesJSX}
      </section> 
    </main>
  );
}

function getHTMLForArticle(article, topic) {
  
  let imageURL = (article.multimedia)?article.multimedia[0].url:'';

  return (
    <article>
      <img src={imageURL} alt="" />
      <span className="category category-{topic.name}">{topic.title}</span>
      <h3><a href="">{article.title}</a></h3>
      <div class="profile">{article.byline}</div>
      <p>{article.abstract}</p>
    </article>
  );
}

export default HomePage;
