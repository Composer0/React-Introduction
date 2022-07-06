import React from "react";
import {Card} from "./card.jsx"
import contacts from "../contacts.js"
import Avatar from "./avatar"

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL="https://orionpalmer.com/img/Orion%20and%20Nann-modified.png" />
      <Card
      name={contacts[0].name}
      imgURL={contacts[0].imgURL}
      phone={contacts[0].phone}
      email={contacts[0].email}
      />
      <Card
      name={contacts[1].name}
      imgURL={contacts[1].imgURL}
      phone={contacts[1].phone}
      email={contacts[1].email}
      />
      <Card
      name={contacts[2].name}
      imgURL={contacts[2].imgURL}
      phone={contacts[2].phone}
      email={contacts[2].email}
      />
    </div>
    )
}

export default App;
