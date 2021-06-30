import React from 'react';
import './ShowcaseArticle.css';

import CategoryPill from '../CategoryPill/CategoryPill';

function ShowcaseArticle({article}) {
  return (
    <section style={{ background: `url(${article.jumboImageURL||article.imageURL}) center/cover` }} className="showcase">
      <CategoryPill name={article.topic.name} title={article.topic.title}/>
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <a href="" className="btn">Learn More</a>
    </section>
    );
}

export default ShowcaseArticle;
