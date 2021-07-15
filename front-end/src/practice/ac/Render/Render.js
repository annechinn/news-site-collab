import React, {useState, useEffect} from 'react';

function GrandParent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("GrandParent: useEffect");
  },[count]);

  return (
    <>
      <button style={{backgroundColor:'#fff2ccff'}} onClick={() => setCount(count + 1)}>Update GrandParent {count}</button>
      <Parent />
    </>
  );
}

function Parent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Parent: useEffect");
  },[count]);

  return (
    <>
      <button style={{backgroundColor:'#d0e0e3ff'}} onClick={() => setCount(count + 1)}>Update Parent {count}</button>
      <Child />
    </>
  );
}

function Child() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Child useEffect");
  },[count]);

  return (
    <>
      <button style={{backgroundColor:'#c9daf8ff'}} onClick={() => setCount(count + 1)}>Update Child {count}</button>
    </>
  );
 
}

function Render() {
  return (
    <GrandParent/>
  )
}

export default Render;

// function GrandParent() {
//   return React.createElement(React.Fragment, null, 
//       React.createElement("button", {onClick: () => setCount(count + 1)}, "Update GrandParent ", count), 
//       React.createElement(Parent, null));
// }

// function Parent() {
//   return React.createElement(React.Fragment, null, 
//       React.createElement("button", {onClick: () => setCount(count + 1)}, "Update Parent ", count), 
//       React.createElement(Child, null));
// }

// function Child() {
//   return React.createElement(React.Fragment, null, 
//     React.createElement("button", {onClick: () => setCount(count + 1)}, "Update Child ", count));
// }

// function Render() {
//   return React.createElement(GrandParent, null);
// }
