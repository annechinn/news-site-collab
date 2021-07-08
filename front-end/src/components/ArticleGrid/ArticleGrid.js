import React from 'react';
import './ArticleGrid.css';
import ArticleCard from '../ArticleCard/ArticleCard';

function ArticleGrid({articles}) {
  return (
    <section className="articles">
      {articles.map(x=><ArticleCard key={x._id} article={x}/>)}
    </section>

    );
}

export default ArticleGrid;
 