import React, {useState} from "react";

function App() {


const [item, setItem] = useState({
  item: "",
})

const [newItem, setNewItem] = useState("");

function handleChange(event) {
  const {value, iName} = event.target;
  
  setItem(prevValue => {
    console.log(prevValue);
    if (iName === "item") {
      return {
        item: value,
      }
    } else {
      return {
        item: prevValue.iName
      }
    }
  })
}

function handleClick(event) {
  event.preventDefault();
  return setNewItem === item;
}

function addItem() {
  return newItem;
}
console.log(newItem);


  return (
    <form onChange={handleClick}>

    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" />
        <button onChange={handleChange} onClick={addItem}>
        <p>{item.item}</p>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItem}
          <li>A Item</li>
        </ul>
      </div>
    </div>
    </form>
  );
}

export default App;
