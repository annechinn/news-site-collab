import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function NumState() {
  const [num, updateNum] = useState(1);


  return (
    <>
    <div class="container">
      num: {num}
    </div>
    <input id="newNum" type='text' onChange={({target})=>updateNum(target.value)}/>
    </>
  )
}

export default NumState;
