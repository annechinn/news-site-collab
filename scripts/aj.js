(() => {
  function mapIt(current) {
    switch(current){
      case "green":
        return "yellow"
      case "yellow":
        return "red"
      case "red":
        return "green"
    };
  }

  console.log(mapIt("green")); // "yellow"
  console.log(mapIt("yellow")); // "red"
  console.log(mapIt("red")); // "green"

})();
