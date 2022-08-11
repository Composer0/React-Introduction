import React, {useState} from 'react';
import DeleteButton from 'react';

function ToDoItem(props) {

    const [isDone, setIsDone] = useState(false);

    function handleClick() {
        setIsDone((prevValue) => {
            return !prevValue;
        })
    }


    return (
    <div onClick={handleClick}>
        <li className="lineItem" style={{textDecoration: isDone ? "line-through" : "none"}}>{props.text}
        <button className="remove" onClick={DeleteButton}>(X)</button>
        </li>
    </div>
    )
}

export default ToDoItem;