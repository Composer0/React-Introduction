import React from "react";
import Avatar from "./avatar";
import Detail from './detail'

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
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
      </div>
  );
 }

 export {Card};