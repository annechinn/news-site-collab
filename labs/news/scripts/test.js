

function testSumNumbersInArray() { 
  if (sumNumbersInArray([1, 2, 3, 4]) === 10) {
    console.log('%c sumNumbersInArray: PASS', 'color: green');
  } else {
    console.log('%c sumNumbersInArray: FAIL', 'color: red');
  }

  if (sumNumbersInArray([10, 0, 3, 4]) === 17) {
    console.log('%c sumNumbersInArray: PASS', 'color: green');
  } else {
    console.log('%c sumNumbersInArray: FAIL', 'color: red');
  }

  if (sumNumbersInArray([]) === 0) {
    console.log('%c sumNumbersInArray: PASS', 'color: green');
  } else {
    console.log('%c sumNumbersInArray: FAIL', 'color: red');
  }

  if (sumNumbersInArray([-1, 0, 3, -1]) === 1) {
    console.log('%c sumNumbersInArray: PASS', 'color: green');
  } else {
    console.log('%c sumNumbersInArray: FAIL', 'color: red');
  }
}

function testsmallestNumberInArray() {
  if (smallestNumberInArray([1, 2, 3, 4]) === 1) {
    console.log('%c smallestNumberInArray: PASS', 'color: green');
  } else {
    console.log('%c smallestNumberInArray: FAIL', 'color: red');
  }

  if (smallestNumberInArray([1, 2, -3, 4]) === -3) {
    console.log('%c smallestNumberInArray: PASS', 'color: green');
  } else {
    console.log('%c smallestNumberInArray: FAIL', 'color: red');
  }
}

function testFilterNumbers() {
  let result = filterNumbers([1, 2, 3, 4], 3);
  if (result.length ===2 && result.find(num=>num===1) && result.find(num=>num===2)) {
    console.log('%c filterNumbers: PASS', 'color: green');
  }
  else {
    console.log('%c filterNumbers: FAIL', 'color: red');
  }

  result = filterNumbers([1, 5, 3, 4], 6);
  if (result.length ===4 && 
       result.find(num=>num===1) && 
       result.find(num=>num===5) &&
       result.find(num=>num===3) &&
       result.find(num=>num===4)) {
    console.log('%c filterNumbers: PASS', 'color: green');
  }
  else {
    console.log('%c filterNumbers: FAIL', 'color: red');
  }

  result = filterNumbers([8], 6);
  if (result.length === 0) {
    console.log('%c filterNumbers: PASS', 'color: green');
  }
  else {
    console.log('%c filterNumbers: FAIL', 'color: red');
  }

}
 

