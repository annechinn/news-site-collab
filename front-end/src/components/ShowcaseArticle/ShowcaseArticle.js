import React from 'react';
import {Link} from 'react-router-dom';
import { buildArticleLink } from '../../utils';
import './ShowcaseArticle.css';
import TopicPill from '../TopicPill/TopicPill';

function ShowcaseArticle({article}) {
  return (
    <section style={{ background: `url(${article.jumboImageURL||article.imageURL}) center/cover` }} className="showcase">
      <TopicPill name={article.topic.name} title={article.topic.title}/>
      <h1>{article.title}</h1>
      <p>{article.abstract}</p>
      <Link to={buildArticleLink(article)}>Learn More</Link>
    </section>
    );
}

export default ShowcaseArticle;
