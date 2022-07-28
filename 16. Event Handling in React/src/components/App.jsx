import React, {useState} from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello there.");
  const [isMousedOver, setMouseOver] = useState(false);
 
  function handleClick() {
    setHeadingText("Submitted");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);

  }
  
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      style = {{backgroundColor: isMousedOver ? "black" : "white"}}
      onClick={handleClick} 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}>Submit</button>
    </div>
  );
}

export default App;


//Correct Solution.

// In this solution Angela wanted us to use the useState property to create a state of true or false to determine whether or not the button was being moused over. In the button itself, we created an inline style that use a ternary method to check for the state of isMousedOver. True to black, false to white. To ensure that we set the state of true and false multiple times we need to introduce the html onMouseOut event listener. Inside of its function it also references the setMouseOver hook from earlier to reset the state to false when the button is not being overed. 