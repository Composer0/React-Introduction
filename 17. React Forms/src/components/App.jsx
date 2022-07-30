import React, {useState} from "react";

function App() {

  const [userName, setUserName] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
    setUserName(event.target.value);
  }
  function handleClick(event) {
    setHeading(userName);
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  // function handleClick() {
  //   setHeadingText("Submitted");
  // }

  return (
    <div className="container">
      <h1>Hello There {headingText}!</h1>
      <form onSubmit={handleClick}> 
      {/* form component refreshes on change. To work around this, we will add onSubmit to handleClick while removing that aspect from the button. On the button we will address its type to "submit". Still refreshs but now it can be addressed. Create a preventDefault to prevent a full page refresh. It will still update the name on each submit. */}

            <input 
            onChange={handleChange} 
            type="text" 
            placeholder="What's your name?" 
            value={userName} //Controlled Component. https://reactjs.org/docs/forms.html
            />

            <button 
            style = {{backgroundColor: isMousedOver ? "black" : "white"}}
            type="submit"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>Submit</button>
      </form>
    </div>
  );
}

export default App;


// Essentially all that had to be done to get this function to work properly was to change the {userName} value in the h1 to a different useState property, which we had to create. We would then have the useState property {headingText} be manipulated by the button's onClick function handleClick where it sets the headingText = {userName}. Problem solved. Boolean values are not needed for this.

// Side note: adding curly braces {} outside of userName will create a search for an object by the name of userName. Use {} only when looking for objects when setting up a hook.