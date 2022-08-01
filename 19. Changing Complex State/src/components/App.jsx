import React, {useState} from "react";

function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [headingTextFirst, setHeadingTextFirst] = useState("");
  const [headingTextLast, setHeadingTextLast] = useState("");
  const [isMousedOver, setMouseOver] = useState(false);

  function firstNameChange(event) {
    setFirstName(event.target.value);
  }

  function lastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleClick(event) {
    setHeadingTextFirst(firstName);
    setHeadingTextLast(lastName);
    event.preventDefault();
  }

  function handleMouseOver() {
    
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }


  return (
    <div className="container">
      <h1>Hello {headingTextFirst} {headingTextLast}</h1>
      <form onSubmit={handleClick}>
        <input 
        name="fName" 
        placeholder="First Name" 
        onChange={firstNameChange}
        value={firstName}
        />

        <input 
        name="lName" 
        placeholder="Last Name" 
        onChange={lastNameChange}
        value={lastName}
        />

        <button 
            style = {{backgroundColor: isMousedOver ? "black" : "white"}}
            type="submit"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            Submit
            </button>
      
      </form>
    </div>
  );
}

export default App;
