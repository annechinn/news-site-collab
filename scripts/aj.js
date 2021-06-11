(()=> {

  let array = [1, 2, 3, 4, 5];
let array2 = [6,7,8,9,10];

// Exercise #2
// write a function named smallestNumberInArray that accepts an array and
// returns a number that equals the smallest number in the array.
function smallestNumberInArray(arr){
  let smallNumber = arr[0]
  arr.forEach(x => {
    
    if(x < smallNumber){
      smallNumber = x; 
    } 
  });
  return smallNumber
}
console.log(array)
// if you already know how to do this one writing your own for loop,
// try to do it using the Array.forEach method
const numbers = [13, 42, 1337,100];

const doubled = numbers.map((number) => {
return number * 2
})
console.log(doubled)


const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const threeLetters = days.map((day) => {
  return day.substring(0,3)
})
console.log(threeLetters)

const people = [{
  first_name: 'CJ',
  last_name: 'R.'
}, {
  first_name: 'Brendan',
  last_name: 'Eich'
}, {
  first_name: 'Kyle',
  last_name: 'Simpson'
}, {
  first_name: 'Douglas',
  last_name: 'Crockford'
}];

const fullNames = people.map( person => {
  return person.first_name + " " + person.last_name;
})

console.log(fullNames)


const animals = [{
  name: 'cat',
  size: 'small'
}, {
  name: 'dog',
  size: 'small'
}, {
  name: 'lion',
  size: 'medium'
}, {
  name: 'elephant',
  size: 'big'
}];

function small(smallest){
  return animals.filter(x =>x.size === 'small').map(x => x.name)

}
console.log(small(animals))
  
  })();