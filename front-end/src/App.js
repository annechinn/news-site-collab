import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import ArticleSection from './containers/ArticleSection/ArticleSection';
import Article from './components/Article/Article';
import NYTBooks from './containers/NYTBooks/NYTBooks';
import ACPage from './practice/ac/ACPage/ACPage';
import AJpage from './practice/aj/AJpage/AJpage';

export default function App(props) {
    return (
        <Router>
            <main>
                <Header/>
                <Switch>
                    <Route path="/article-section/:topicId/article/:articleId">
                        <Article/>
                    </Route>
                    <Route path="/article-section/:topicId">
                        <ArticleSection/>
                    </Route>
                    <Route path="/nyt-books">
                        <NYTBooks/>
                    </Route>      
                    <Route exact path="/">
                        <Redirect to="/article-section/60d24e7cb4f2084cb4ee9505" />
                    </Route>
                    <Route path="/ac-page">
                        <ACPage/>
                    </Route>
                    <Route path="/aj-page">
                        <AJpage/>
                    </Route>
                </Switch>
                <Footer/>
            </main>
        </Router>
    );
}

