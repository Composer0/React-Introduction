import React from "react";
import Avatar from "./avatar";
import Detail from './detail'
import contacts from "../contacts"

function Card(props) {
  return (
      <div className="card">

        <div className="top">
        <p>{props.id}</p>
          <h2 className="name">{props.name}</h2>
          <Avatar imgURL={props.imgURL}/>
        </div>

        <div className="bottom">
          <Detail
          detailInfo={props.phone} 
          />
          <Detail
          detailInfo={props.email} 
          />
        </div>

        </div>
  );
 }

 export {Card};