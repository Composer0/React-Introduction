import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick(event) {
    event.preventDefault();
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <form onChange={handleClick}>

    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" />
        <input name="lName" placeholder="Last Name" />
        <input name="email" placeholder="Email" />
        <button
        style = {{backgroundColor: isMouseOver ? "black" : "white"}}
        type = "submit"
        onMouseOver = {handleMouseOver}
        onMouseOut = {handleMouseOut}
        >Submit</button>
      </form>
    </div>
    </form>
  );
}

export default App;
