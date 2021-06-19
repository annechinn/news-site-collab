(() => {



  function mapIt(current) {
      let message = 'massage';
    switch (current) {
        case "green":
          message = "yellow";
          break;
        case "yellow":
          message = "red";
          break;
        case "red":
          message = "green";
          break;
        
        
    }
    return message;
  }

 
  console.log(mapIt("green")); // "yellow"
  console.log(mapIt("yellow")); // "red"
  console.log(mapIt("red")); // "green"})();




})();
