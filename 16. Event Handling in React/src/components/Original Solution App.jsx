import React, {useState} from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello there.");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function hoverBlack(button) {
    button.target.style.background = 'black';
  }

  function returnWhite(button) {
    button.target.style.background = 'white';
  }
  //has to include the phrase target after the event or e is described. You can change the name of the event if you want. I chose 'button' for ease of reading so others would be able to link why it was being used in that way.
  
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick} onMouseOver={hoverBlack} onMouseOut={returnWhite}>Submit</button>
    </div>
  );
}

export default App;
