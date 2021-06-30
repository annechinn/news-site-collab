import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import './App.css';

import Header from './containers/Header/Header';
import Footer from './containers/Footer/Footer';
import ArticleSection from './containers/ArticleSection/ArticleSection';


export default function App(props) {
    return (
        <Router>
            <main>
                <Header/>
                <Switch>
                    <Route path="/section/:topicId/:articleId" component={ArticleSection} />
                    <Route path="/section/:topicId" component={ArticleSection} />
                    <Route exact path="/">
                        <Redirect to="/section/home" />
                    </Route>
                </Switch>
                <Footer/>
            </main>
        </Router>
    );
}

