import React from "react";
import ReactDOM from "react-dom";

import { Card } from "./props.jsx";

// import Card from "props"

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Nann Palmer"
      img="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/139326628_10159258722639396_516933779557686535_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=H2ynDtsWNwkAX_GLZ1C&tn=sDww6FbdDUWzwvFn&_nc_ht=scontent-lga3-2.xx&oh=00_AT_eyTeoHrTZ6UJ-DIKh1ZYZQ5qP1KlNTD9YaffZQeXXVw&oe=62EA8F15"
      tel="+882 941 1010"
      email="nancy@theBest.com/>"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+N Number"
      email="jack@theBest.com/>"
    />
  </div>,
  document.getElementById("root")
);
