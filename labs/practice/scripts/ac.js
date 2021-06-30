(()=> {

function removeChar(str) {
  return str.split("").slice(1, str.length-1).join("");
}

console.log(removeChar('this is a test'));

  })();