import React, {useState} from 'react';





function InputArea(props) {

    //Reads the text input    
    const[text, setText] = useState("");
    
    function handleChange(event) {
        const newValue = event.target.value;
        setText(newValue);
    }
    //Reads the text input
    
    
    
    //Allows you to press Enter instead of clicking Add to add another list item. Its a convenience feature :D
    function handleKeyPress(e) {
        if(e.key === "Enter") {
            props.onAdd(text);
            setText("")
        } 
    }
    //Use enter instead of Add.

    return(   

    <div className="form">
        <input 
            onChange={handleChange}
            value={text}
            type="text" required 
            placeholder="Enter Item Here" 
            onKeyPress={(e) => 
            handleKeyPress(e)}
        />

        <button
            onClick={() => {
                props.onAdd(text);
                setText("")
            }}
        >

        <span>Add</span>
        </button>
  </div>
    )
}

export default InputArea;