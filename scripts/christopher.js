(() => {
  function mapIt(current) {
    let message = "";
    switch (current) {
      case "green":
        return "yellow";
      case "yellow":
        return "red";
      case "red":
        return "green";
    }
    return message;
  }

  console.log(mapIt("green")); // "yellow"
  console.log(mapIt("yellow")); // "red"
  console.log(mapIt("red")); // "green"})();
})();
