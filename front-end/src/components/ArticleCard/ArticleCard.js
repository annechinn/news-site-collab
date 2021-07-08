import React from 'react';
import {Link} from "react-router-dom"; 
import { buildArticleLink } from '../../utils';
import './ArticleCard.css';

function ArticleCard({article}) {
  return (
    <article key={article.id}>
      <img src={article.imageURL} alt="" />
      <h3><Link to={buildArticleLink(article)}>{article.title} </Link></h3>
      <p>{article.abstract}</p> 
   </article>
    );
}

export default ArticleCard;
