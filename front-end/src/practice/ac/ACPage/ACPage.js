import React from 'react';
import './ACPage.css';

 import Store from '../Store/Store';
 //import ArrayState from '../ArrayState/ArrayState';
 //import ObjectState from '../ObjectState/ObjectState';
 //import NumState from '../NumState/NumState';
 //import PriceCheck from '../PriceCheck/PriceCheck';
 //import BooksAPI from '../BooksAPI/BooksAPI';
 //import Render  from '../Render/Render';

function ACPage() {
  return (
    <>
      <div className="container">
        <Store/>
      </div>
    </>
  );
}

export default ACPage;