import React, {useState} from 'react';
import ToDoItem from './ToDoItem-Delete';
// import DeleteButton from '../components/DeleteButton';

function App() {
 

//Reads the text input    
const[text, setText] = useState("");

function handleChange(event) {
    const newValue = event.target.value;
    setText(newValue);
}
//Reads the text input


//Adds creates a list item using the input text.
const[items, setItems] = useState([]);

function addItems() {
    setItems(prevValues => {
        return [...prevValues, text];
        })
    setText("")
}

//Adds creates a list item using the input text.


//Removes Items on Button Click
function deleteItem(id) {
  setItems((prevItems) => {
    return prevItems.filter((items, index) => {
      return index !== id;
    
  })
})
}
//Removes Items on Button Click
//Allows you to press Enter instead of clicking Add to add another list item. Its a convenience feature :D
function handleKeyPress(e) {
    if(e.key === "Enter") {
        addItems()
    } 
}
//Use enter instead of Add.


    return (
        // <form onChange={handleClick}>
    
        <div className="container">
          <div className="heading">
            <h1>To-Do List</h1>
          </div>
          <div className="form">
            <input 
                onChange={handleChange}
                value={text}
                type="text" required 
                placeholder="Enter Item Here" 
                onKeyPress={(e) => handleKeyPress(e)}

            />
            <button
            onClick={addItems}
            >
              <span>Add</span>
            </button>
          </div>
          <div>
            <ul>
            {items.map((toDoItem, index) => <ToDoItem key={index} id={index} text={toDoItem} onChecked={deleteItem}/> )} 
            </ul>
          </div>
        </div>
        // </form>
      );
}


export default App;