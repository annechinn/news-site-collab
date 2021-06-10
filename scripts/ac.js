(()=> {

  
  function evenOrOdd(numbers) {

    let result = [];

    numbers.forEach(x=>{
      if (x%2===0) result.push("even");
      else result.push("odd");
    });

    return result;
   
  }

  console.log(evenOrOdd([0, 1, 2, 3, 5]));
   
  
  })();