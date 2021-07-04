import React from 'react';
import './SportsSection.css';
import {getArt}

import ShowcaseArticle from '../../components/ShowcaseArticle/ShowcaseArticle';
import ArticleGrid from '../ArticleGrid/ArticleGrid';

function SportsSection() {
  return (
    <>
      <ShowcaseArticle    
        imageURL="https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        title="Lorem ipsum dolor sit amet."
        abstract="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et ea
        impedit libero, beatae animi provident nesciunt molestias ipsam nemo ad."
        topic="sports"/>
        
      <ArticleGrid/>
    </>
  )

}

export default SportsSection;
