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

  function handleChange(event) {
    const {value, name} = event.target;

    setContact(prevValue => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        }
        } else if (name === "lName") {
          return {
            fName: prevValue.fName,
            lName: value,
            email: prevValue.email
        }
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
      }
    }
  }
  )
}

  return (
    <form onChange={handleClick}>

    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" 
          onChange={handleChange} value={contact.fName}
        />
        <input name="lName" placeholder="Last Name" 
          onChange={handleChange} value={contact.lName}
        />
        <input name="email" placeholder="Email" 
          onChange={handleChange} value={contact.email}
        />
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
