import React from "react";
import Login from "./Login.jsx";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  // return <div className="container">{
  //   currentTime > 8 && <h1>Why are you still working</h1>}</div>}

  return <div className="container">{
    isLoggedIn === true ? <h1>Hello</h1> : <Login />} </div>};
    // return <div className="container">{
    //   currentTime > 12 && currentTime < 16 ? <h1>Why are you still working?</h1> : null }</div>};

// conditional ? true expression : false expression.... a lot fewer characters being written out. This is referred to as a Ternary Operator.

//null is used as a show nothing value for false.
//&& is used to remove the false aspect of the expression. As long as the conditional comes out as true it will render the expression, if not it will ignore the rest of the expression. This is preferred when a false statement would remove a value that is unneeded.

export default App;
