import React, {useState, useEffect} from 'react';
import {NavLink, Link} from "react-router-dom"; 
import {getTopics} from './../../api/back-end';

import './NavBar.css';

function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {

    (async () => {
      setTopics(await getTopics());
    })();

  }, []);

  const sectionLinks = topics.map(topic=> {
    const toLink = `/section/${topic._id}`;
    return <li key={topic._id}><NavLink to={toLink} activeClassName="active">{topic.title}</NavLink></li>;
  });

  return (
    <nav className="nav-container">
    <ul>
      {sectionLinks}
      <li key={'nyt-books'}><Link to="/nyt-books">NYT Books</Link></li>
      <li key={'account'}><Link to="/account">Account</Link></li>
    </ul>
  </nav>
    );
}

export default NavBar;
