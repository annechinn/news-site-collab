import React from 'react';
import {Link} from "react-router-dom"; 

import './Header.css';
import logo from '../../assets/logo.png';

import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <header>
      <Link to="/home">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <NavBar/>
    </header>
    );
}

export default Header;
