import React from 'react';




function ToDoItem(props) {
    
    // function handleClick() {
        
    // }

    return ( 
        <div 
        onClick={() => {
            props.onChecked(props.id)
        }}>
    <li 
    className="lineItem">{props.text}
    </li>
    </div>
    )
}

export default ToDoItem;