import React from "react";
import {Card} from "./card.jsx"

function CreateCard(contact) {
  
    return < 
    Card
    key={contact.id}  
    name={contact.name}
    imgURL={contact.imgURL}
    phone={contact.phone}
    email={contact.email}
     />
  
  }

  function ID() {
    <div>
  <p>{props.id}</p>

    </div>
  }

  export default CreateCard;