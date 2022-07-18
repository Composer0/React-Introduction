import React from "react";

function Input(props) {
    return <input 
    type={props.type} 
    placehold={props.placeholder}
    />
}

export default Input;