import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


const citrus = ["lime", "lemon", "orange"];
const fruits = ["apple", "banana", "coconut", ...citrus]; //es6 spread operator. Adds the citrus array into fruits. It can be anywhere within the array that you wish.

console.log(fruits);

const fullName = {
    fname: "James",
    lName: "Bond"
}

const user = {
    ...fullName,
    id: 1,
    username: "jamesbond007"
}

console.log(user);