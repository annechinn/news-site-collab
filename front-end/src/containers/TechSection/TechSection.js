import React from 'react';
import './TechSection.css';

import ShowcaseArticle from '../../components/ShowcaseArticle/ShowcaseArticle';
import ArticleGrid from '../ArticleGrid/ArticleGrid';

function TechSection() {
  return (
    <>
      <ShowcaseArticle
       imageURL="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
       title="Lorem ipsum dolor sit amet."
       abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
       impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."
       topic="technology"
        />
        
      <ArticleGrid/>
    </>
  )

}

export default TechSection;
