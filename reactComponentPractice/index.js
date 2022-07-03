import React from "react";
import ReactDOM from "react-dom";
// import FoodHeading from "./heading";
// import GameHeading from "./heading";
import {FoodHeading, GameHeading} from "./heading";
import {FoodList, SummerGameList} from "./list";

// in react is normal to create a function in Pascal Case(UpperCase)

ReactDOM.render(
  <div>
    <FoodHeading></FoodHeading>
    <FoodList></FoodList>
    <GameHeading></GameHeading>
    <SummerGameList></SummerGameList>
  </div>,
  document.getElementById("root")
);
