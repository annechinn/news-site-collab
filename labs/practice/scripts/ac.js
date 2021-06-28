(()=> {

function getAverage(marks){

  let total = 0;
  marks.forEach(x=>total+=x);
 // let total = marks.reduce((acc,mark)=> acc+=mark, 0);
  return Math.floor(total/marks.length);
}

console.log(getAverage([2,2,2,2])===2);
console.log(getAverage([1,2,3,4,5,])===3);
console.log(getAverage([1,1,1,1,1,1,1,2])===1);

  })();