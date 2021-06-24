(()=> {

function reverseArray(array) {
  let result = [];
  for (let i=array.length-1;i>=0;i--) {
    result.push(array[i]);
  }

  return result;
}

const array = [1,2,3,4];
console.log(reverseArray(array));

  
   
  
  })();