import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

 
  const [isMousedOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;

    // if (inputName === "fName") {
    //   setFullName({fName: newValue}, );
    // } else if (inputName === "lName") {
    //   setFullName({lName: newValue})
    // }  Doesn't work. It will reset the opposite portion of the object each time an input is made.

    setFullName(prevValue => {
      console.log(prevValue);
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        }
      } else if (inputName === "lName") {
          return {
            fName: prevValue.fName,
            lName: newValue
          }
        }
      }
    )
  }

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
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form onSubmit={handleClick}>

        <input 
          name="fName" 
          placeholder="First Name" 
          onChange={handleChange}
          value={fullName.fName}
        />

        <input 
          name="lName" 
          placeholder="Last Name" 
          onChange={handleChange}
          value={fullName.lName}
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
