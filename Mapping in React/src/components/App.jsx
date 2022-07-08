import React from "react";
import contacts from "../contacts.js"
import Avatar from "./avatar"
import CreateCard from "./createCard"


function App() {
  return (
    <div>
      <h1 className="header">My Contacts</h1>
      <Avatar imgURL="https://orionpalmer.com/img/Orion%20and%20Nann-modified.png" />
      <div className="container">
      {contacts.map(CreateCard)};
      {/* without a unique key property a warning will generate. 
      To avoid this, we must give each object a key... or ID.*/}
      </div>
    </div>
    )
}

export default App;
