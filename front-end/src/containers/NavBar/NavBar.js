import React, {useState, useEffect} from 'react';
import {NavLink, Link} from "react-router-dom"; 
import {getTopics} from './../../api/back-end';
import logo from '../../assets/logo.png';
import './NavBar.css';

function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {

    (async () => {
      setTopics(await getTopics());
    })();

  }, []);

 
  if (topics.length>0) {
    const homeTopicLink = `/article-section/${topics.find(topic=>topic.name==='home')._id}`;
  
    const sectionLinks = topics.filter(topic=>topic.name!=='home').map(topic=> {
      const toLink = `/article-section/${topic._id}`;
      return <li key={topic._id}><NavLink to={toLink} activeClassName="active">{topic.title}</NavLink></li>;
    });
  
    return (
      <>
      <Link to={homeTopicLink}>
          <img src={logo} className="logo" alt="logo" />
      </Link>
      <nav className="nav-container">
        <ul>
          {sectionLinks}
          <li key={'nyt-books'}><NavLink to="/nyt-books">NYT Books</NavLink></li>
          <li key={'ac-page'}><NavLink to="/ac-page">AC</NavLink></li>
          <li key={'AJpage'}><NavLink to="/aj-page">AJ</NavLink></li>
        </ul>
      </nav>
      </>
      );
  }
  else {
    return (
      <>
      </>
    )
  }
  
}

export default NavBar;
