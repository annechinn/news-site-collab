import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import './Article.css';
import {getArticle} from '../../api/back-end';

function Article() {
  const [article, setArticle] = useState(null);

  const { articleId } = useParams();

  useEffect(() => {

      setArticle(null);

      (async () => {
        setArticle(await getArticle(articleId));
      })();

  }, [articleId]);

   if (article) {
    return (
      <article class="full">
        <img src={article.jumboImageURL || article.imageURL} alt="" />
        <h3>{article.title}</h3>
        <div dangerouslySetInnerHTML={{__html: article.body}}></div>
     </article>
  
      );
   }
   else {
     return (
       <>
       </>
     )
   }
  
}

export default Article;
