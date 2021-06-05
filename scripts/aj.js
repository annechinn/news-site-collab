(()=> {

  
  // Exercise #1
  // write a function named filterNumbers that accepts an array and a number
  // and returns a new array that contains only the numbers that are less
  // than the number.
  //
  // if you already know how to do this one writing your own for loop,
  // try to do it using the Array.forEach method
  
  // sample call
  // filterNumbers ([1, 2, 3, 4], 3); should return [1, 2]
  

  
  // Exercise #2
  // write a function named smallestNumberInArray that accepts an array and 
  // returns a number that equals the smallest number in the array.
  
  // if you already know how to do this one writing your own for loop,
  // try to do it using the Array.forEach method
  
  // sample call
  // smallestNumberInArray ([1, 2, 3, 4]); should return 1
  
  // hints:
  // you need to iterate through the array and check each number in the
  // array to see if it is the smallest number you have seen so far 
  // and if so, then update the variable you are using to keep track of
  // the smallest number you have seen so far.
  // The return value for the function is the smallest number you have seen.
  //
  // since we're looking for the smallest number, we can't initialize the
  // variable to hold the smallest number to be 0 because that's the value
  // that would be returned for the smallest number if all the numbers
  // in the array are greater than zero and that would be incorrect.
  //
  // You can initialize the variable with the value of the first element in the array. 
  // In a more robust solution, you'd check the length of the array to make 
  // sure there was at least one element to avoid an error condition, but we'll say that
  // the input data is guaranteed to contain at least one element.
  
  
  // Exercise #3
  // write a function named sumNumbersInArray that accepts an array and
  // returns a number that equals the sum of all of the numbers in the array.
  
  // if you already know how to do this one writing your own for loop,
  // try to do it using the Array.forEach method
  
  // sample call
  // sumNumbersInArray ([1, 2, 3, 4]); should return 10
  
  // hints:
  // you need to iterate through the array and add each number in the
  // array to a total. the total will be the return value of the function.
  
  function sumNumbersInArray(array){
    let total = 0;
    array.forEach(next=>total+=next);
    return total;
  }
  /************************ Test Code ***************************/
  
  // comment in the test functions at the point when you have written
  // the function enough to want to start testing it and see the output
  // in the console log
  //
  
  // testFilterNumbers();
  // testsmallestNumberInArray();
  testSumNumbersInArray();
  
  
  
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
   
  
  })();