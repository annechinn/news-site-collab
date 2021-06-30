import React from 'react';
import {Link} from "react-router-dom"; 
import './ArticleCard.css';

function ArticleCard({article}) {
  const articleLink = `/section/${article.topic._id}/${article._id}`;
  return (
    <article key={article.id}>
    <img src={article.imageURL} alt="" />
    <h3><Link to={articleLink}>{article.title}</Link></h3>
    <p>{article.abstract}</p>
    
   </article>

    );
}

export default ArticleCard;
