function findDups_nestedLoops(arr) {

  const dups = [];

  for (let i=0;i<arr.length; ++i) {
    for (let j=i+1;j<arr.length; ++j) {
      if (arr[i]===arr[j]) dups.push(arr[i]);
    }
  }

  return dups;
 }

 function findDups_sort(arr) {
   const dups = [];
   arr.sort();
   for (let i=0;i<arr.length-1; ++i) {
     if (arr[i]==arr[i+1])  dups.push(arr[i]);
   }

   return dups;
 }

 function findDups_set(arr) {
    const dups = [];
    const seen = new Set();
    for (let i=0;i<arr.length-1; ++i) {
      if (!seen.has(arr[i])) seen.add(arr[i]);
      else dups.push(arr[i]);
    }

    return dups;
 }

 console.log(findDups_nestedLoops([1, 2, 3, 3, 4]));
 console.log(findDups_sort([1, 2, 3, 3, 4]));
 console.log(findDups_set([1, 2, 3, 3, 4]));