import React from 'react';
import './ACPage.css';

import Store from '../Store/Store';
import ArrayState from '../ArrayState/ArrayState';
import ObjectState from '../ObjectState/ObjectState';
import NumState from '../NumState/NumState';

function ACPage() {
  return ( 
  <>
  <div className="container">
  <NumState/>
  </div>
  </>
   
  );
}

export default ACPage;