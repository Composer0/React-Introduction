import React from "react";

function Entry(props) {
    return(
        <div className="term">
          <dt>
            <span className="emoji" role="img" area-label={props.arialabel}>
              {props.emoji}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.meaning}
          </dd>
        </div>
    );
}

export {Entry};