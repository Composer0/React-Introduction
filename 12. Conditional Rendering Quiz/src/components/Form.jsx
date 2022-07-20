import React from "react";
import Registered from "./Registered.jsx";

function Form() {
  return (
    <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <Registered />
    </form>  
  )
}


export default Form;
