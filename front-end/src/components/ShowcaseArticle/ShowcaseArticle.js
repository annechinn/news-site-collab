import React from 'react';
import './ShowcaseArticle.css';

import TopicPill from '../TopicPill/TopicPill';

function ShowcaseArticle({article}) {
  return (
    <section style={{ background: `url(${article.jumboImageURL||article.imageURL}) center/cover` }} className="showcase">
      <TopicPill name={article.topic.name} title={article.topic.title}/>
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <a href="" className="btn">Learn More</a>
    </section>
    );
}

export default ShowcaseArticle;
