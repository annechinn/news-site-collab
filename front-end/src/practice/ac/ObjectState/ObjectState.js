import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';

function ObjectState() {
  const [user, updateUser] = useState({firstName: 'Anne', lastName: 'Chinn'});

  return (
    <>
    <div>
      firstName: {user.firstName}
    </div>
    <div>
      lastName: {user.lastName}
    </div>
    <Button variant="primary" size="sm" onClick={
      ()=>{
        // user.firstName = "Sally";
        // updateUser(user);
        updateUser({...user, firstName: 'Sally'});
        }
      }>Change Name to Sally</Button>
    </>
  )
}

export default ObjectState;