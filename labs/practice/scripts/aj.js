(()=> {


  let log = () => console.log("hello")
  function doIt(x) {
return x()
  }
  
  doIt(log)

})();