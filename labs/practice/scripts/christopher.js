(()=> {


  function question(choices) {
    return `You have ${choices.length} choices: ${}`;
  }

  console.log(question(['strawberry', 'chocolate', 'vanilla'])); 
  console.log(question(['red', 'blue', 'green']));

  
  })();