import React, {useState} from "react";

function App() {
  const [count, setCount] = useState(427);
  // array has two items. The first is a value, the second is a function.



  

  
  function increase() {
    setCount(count + 1);
    // console.log(count);
  }
  
  function decrease() {
    setCount(count - 1);
    // console.log(count);
  }
  
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
  </div>
  );
}

export default App;
