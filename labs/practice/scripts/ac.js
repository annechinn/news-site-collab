(()=> {

// copy the first n elements in input array, arr
// into outputArray
// fill it up
// return it

function firstAndLast(a) {
  let results = [];
  results.push(a[0]);
  results.push(a[a.length-1]);
  return results;

}

console.log(firstAndLast([1, 2, 3, 4, 5]));
console.log(firstAndLast([]));


  
   
  
  })();