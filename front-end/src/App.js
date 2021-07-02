import React from 'react';
import './App.css';

import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import ScienceSection from './containers/ScienceSection/ScienceSection';
import ArtsSection from './containers/ArtsSection/ArtsSection';
import TechSection from './containers/TechSection/TechSection';
import FoodSection from './containers/FoodSection/FoodSection';
import ArticleSection from './containers/ArticleSection/ArticleSection';


function App() {
  return (
    <>
    <main>
      <Header/>
      <ArtsSection/>
      <Footer/>
    </main>
    </>  
  );
}

export default App;
