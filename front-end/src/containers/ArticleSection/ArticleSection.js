import React, {useState, useEffect} from 'react';
import './ArticleSection.css';
import {getArticlesForTopic, getArticle, getTopic} from '../../api/back-end';
import ShowcaseArticle from './../../components/ShowcaseArticle/ShowcaseArticle';
import ArticleGrid from '../../components/ArticleGrid/ArticleGrid';
import Article from '../../components/Article/Article';

function ArticleSection(props) {

  const topicId = props.match.params.topicId;
  const articleId = props.match.params.articleId;
 
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState(null);
  const [topic, setTopic] = useState(null);

  useEffect(() => {

    if (articleId) {
      (async () => {
        setArticle(await getArticle(articleId));
      })();
    }
  }, [articleId]);

  useEffect(() => {

    if (!articleId) {
       setTopic(null);
      setArticles([]);
 
      (async () => {
        setTopic(await getTopic(topicId));
        setArticles(await getArticlesForTopic(topicId));
      })();
    }

  }, [articleId, topicId]);


  if (articleId && article) {
    return (
      <Article article={article}/>
      );
  }
  else if (topic && articles.length>0) {
    const showcaseArticle = articles.find(x=>x._id===topic.showcaseArticle);
    return (
      <>
      <ShowcaseArticle article={showcaseArticle}/>
      <ArticleGrid articles={articles}/>
      </>
      );
  }
  else {
    return (<></>);
  }
}

export default ArticleSection;
