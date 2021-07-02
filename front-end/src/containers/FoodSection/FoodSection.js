import React from 'react';
import './FoodSection.css';

import ShowcaseArticle from '../../components/ShowcaseArticle/ShowcaseArticle';
import ArticleGrid from '../ArticleGrid/ArticleGrid';

function FoodSection() {
  return (
    <>
      <ShowcaseArticle 
        imageURL="https://images.pexels.com/photos/6529912/pexels-photo-6529912.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Lorem ipsum dolor sit amet."
        abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
        impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."
        topic="food"/>
        
      <ArticleGrid/>
    </>
  )

}

export default FoodSection;
