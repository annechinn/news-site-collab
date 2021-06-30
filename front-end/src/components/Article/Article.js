
import React from 'react';
import './Article.css';

function Article({article}) {
  console.log(article);
   return (
    <article class="full">
      <img src={article.jumboImageURL || article.imageURL} alt="" />
      <h3><a href="">{article.title}</a></h3>
      <div dangerouslySetInnerHTML={{__html: article.body}}></div>
   </article>

    );
}

export default Article;
