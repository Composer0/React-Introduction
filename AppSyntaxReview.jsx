import React, {useState} from 'react';

function App() {

    const [count, setCount] = useState(427);

    function increase() {
        setCount(count + 1)
    }
    function decrease() {
        setCount(count - 1)
    }
    function divide() {
        setCount(count / 2)
    }
    function multiply() {
        setCount(count * 2)
    }

    return (
        <div className="container">
            <h1>{count}</h1>
            <button onClick={decrease}>-</button>
            <button onClick={increase}>+</button>
            <button onClick={divide}>X/2</button>
            <button onClick={multiply}>X*2</button>
        </div>
    )
}

console.log("Practiced in triplicate. Timed for fun. 2 minutes and 8 seconds to type it out without autocomplete features")

export default App;

