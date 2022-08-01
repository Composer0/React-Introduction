import React, {useState} from "react";

function App() {

  const [fullName, setFullName] = useState({
    fName: "",
    mName: "",
    lName: ""
  });

 
  const [isMousedOver, setMouseOver] = useState(false);

  function handleChange(event) {
    // const newValue = event.target.value;
    // const inputName = event.target.name;


    const {value, name} = event.target; //This technique just simplifies the game immensely. We reduce two consts to one by target the properties of the input: value and name. Destructuring. Remember that this process is referred to as destructuring.

    //****Warning do not try to access the event or anything related to the event inside a stateful setter.****
    // https://reactjs.org/docs/events.html Synthetic Events recommended reading.

    // if (inputName === "fName") {
    //   setFullName({fName: newValue}, );
    // } else if (inputName === "lName") {
    //   setFullName({lName: newValue})
    // }  Doesn't work. It will reset the opposite portion of the object each time an input is made.

    setFullName(prevValue => {
      console.log(prevValue);
      if (name === "fName") {
        return {
          fName: value,
          mName: prevValue.mName,
          lName: prevValue.lName
        }
      } else if (name === "mName") {
          return {
            fName: prevValue.fName,
            mName: value,
            lName: prevValue.lName
          }
        } else if (name === "lName") {
          return {
            fName: prevValue.fName,
            mName: prevValue.mName,
            lName: value
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
      <h1>Hello {fullName.fName} {fullName.mName} {fullName.lName}</h1>
      <form onSubmit={handleClick}>

        <input 
          name="fName" 
          placeholder="First Name" 
          onChange={handleChange}
          value={fullName.fName}
        />

        <input 
          name="mName" 
          placeholder="Middle Name" 
          onChange={handleChange}
          value={fullName.mName}
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
