import { array } from "prop-types";

(() => {

  
  function multiplyBy(num) {

    return (x) => {
      x * num;
    }

  }

  let multiplyBy2 = multiplyBy(2);
  let answer = multiplyBy2(3);

  let multiplyBy4 = multiplyBy(4);
  let an2 = multiplyBy4(3);


  var i = 0;

  function doThis() {

    let arr = [1,2,3,4];
    for (let i=0;i<arr.length;++i) {

      setTimeout(
          ()=> {
            console.log(i);
          }
        ,1000)
    }
  }

  doThis();




})();

