(()=> {
 
  
 // 01 - Convert the following for loop to a forEach call on the array

// Create the array
const flavors = ['chocolate', 'ginger', 'carrot', 'coffee', 'walnut', 'banana'];

// Create the for loop
for (let i = 0; i < flavors.length; i++) {
  console.log(`I like ${flavors[i]} cake`);
}

flavors.forEach(flavor => console.log(`I like ${flavor} cake`));





// 04 - Log the name of each product to the page with a forEach call on the products array

let products = [{
  name: 'Running shoes',
  price: 75
}, {
  name: 'Golf shoes',
  price: 85
}, {
  name: 'Dress shoes',
  price: 95
}, {
  name: 'Walking shoes',
  price: 65
}, {
  name: 'Sandals',
  price: 55
}];

products.forEach(x=>console.log(x.name))




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

people.map(p=>`${p.first_name} ${p.last_name}  ` )



// 01 - Create a new array with only the even numbers

const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.filter(n=>n%2===0)


// 02 - create a new array with only the days that start 
// with the letter T

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];
days.filter(d=>d[0]==='T')


// 03 - Create a new array with only the people who's 
// first name is less than 4 characters long.

people = [{
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

people.filter(p=>p.first_name.length<4)



   
  
  })();

