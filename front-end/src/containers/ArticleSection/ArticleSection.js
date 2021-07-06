import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import './ArticleSection.css';
import {getArticlesForTopic, getTopic} from '../../api/back-end';
import ShowcaseArticle from './../../components/ShowcaseArticle/ShowcaseArticle';
import ArticleGrid from '../../components/ArticleGrid/ArticleGrid';

function ArticleSection() {
  
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState(null);

  const { topicId } = useParams();
      
  useEffect(() => {
 
      setTopic(null);
      setArticles([]);

      (async () => {
        setTopic(await getTopic(topicId));
        setArticles(await getArticlesForTopic(topicId));
      })();

  }, [topicId]);


  if (topic && articles.length>0) {
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
