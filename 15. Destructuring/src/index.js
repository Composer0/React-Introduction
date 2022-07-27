// import animals, { useAnimals } from "./data";

// //Destructuring Arrays
// // console.log(animals);
// const [cat, dog] = animals;
// // console.log(cat);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();  makeSound is just what we are naming the function. It was not assigned earlier. when creating an array variable such as this the first attribute is the objects while the second is the function. Function in this case is useAnimals... the default name which is being set as a variable, the actions of the function makesound are what is occurring.

// //Destructuring Objects
// // const { name, sound, feedingRequirements} = cat;

// // const { name: catName, sound: catSound } = cat; this allows you to redifine the names of the object properties.

// // const { name = "Fluffy", sound = "Purr" } = cat; redefines the properties/values inside the object. This only changes if the original object does not have an assigned property.

// // const {name, sound, feedingRequirements: {food, water} } = cat; displaying a object with properties.

// // const {feedingRequirements: {food, water} } = cat; displaying a object with properties.
// // console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: [hondaTopColour]
} = honda;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

const {
  speedStats: { zeroToSixty: hondaZeroToSixty}
} = honda;
const {
  speedStats: { zeroToSixty: teslaZeroToSixty}
} = tesla;

ReactDOM.render(
  <table>
  <tbody>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
        <th>Zero to Sixty</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
        <td>{teslaZeroToSixty}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
        <td>{hondaZeroToSixty}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
