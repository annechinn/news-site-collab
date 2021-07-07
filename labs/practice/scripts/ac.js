(()=> {

  
  'use strict';

  let arr1 = [1, 2, 3];
  const [firstVal, secondVal] = arr1;
  console.log(firstVal);
  console.log(secondVal);

  let user = {firstName: 'Anne', lastName: 'Chinn', address: '1234 5th Street', city: 'Seattle'}
  const {firstName, lastName } = user;
  console.log(firstName);
  console.log(lastName);

  })();