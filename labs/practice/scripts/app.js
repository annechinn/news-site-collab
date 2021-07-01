let APP = {};

(()=> {

  function otherPrivateStuff() {
    console.log("hello");
  }

  APP.getAverage = (marks) => {
    let total = 0;
    marks.forEach(x=>total+=x);
    return Math.floor(total/marks.length);
}


})();