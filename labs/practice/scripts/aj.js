(()=> {

 // the function should return a string enumerating
// the choices in the input array.
// "You have three choices: red, blue, green?"
// no local variables

function question(choices) {
  return 
  `
  You have ${choices.length} 
  choices: ${choices.join(', ')} ${choices.flavor}
  `  
}

console.log(question(['strawberry', 'chocolate', 'vanilla'])); 
console.log(question(['red', 'blue', 'green'])); 

  
console.log(answer("n"));
console.log(answer("NO"));
console.log(answer("N"));


  })();