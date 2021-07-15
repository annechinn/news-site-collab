import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function ArrayState() {
  const [nums, updateNums] = useState([1,2,3,4]);

  return (
    <>
    <div class="container">
      {nums.map(x=><div>{x}</div>)}
    </div>
    <Button variant="primary" size="sm" onClick={
      ()=>{
        // nums.push(5); 
        // updateNums(nums);
        updateNums([...nums, 5]);
        }
      }>Add Number</Button>
    </>
  )
}

export default ArrayState;
