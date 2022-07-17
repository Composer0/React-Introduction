import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

// ALL CHALLENGES ON THIS PAGE DEFEATED!!!

// var numbers = [3, 56, 2, 48, 5];
//Starter Function Example

// function square(x) {
//     return x * x;
// }


//Anonymous Function Example: Function doesn't have a name.

// const newNumbers = numbers.map(function (x) {
//     return x * x;
// })
// console.log(newNumbers);


//Arrow FUNCTION!!! Simply take out the word function!

// const newNumbers = numbers.map((x,y) => {
//     return x * y;
// })


// if you have only one parameter then you don't need the parentheses or the curly brackets.
// const newNumbers = numbers.map( x => x * x)



//CHALLENGE BELOW
//CONVERT ALL FUNCTIONS BELOW TO ES6 ARROW FUNCTIONS


////Map -Create a new array by doing something with each item in an array.
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });

//Round 1: SUCCESS!!!
// /const newNumbers = numbers.map( x => x*2)


//////Filter - Create a new array by keeping the items that return true.
// const newNumbers = numbers.filter(function(num) {
//     return num < 10;
// });

//Round 2: SUCCESS!!!
// const newNumbers = numbers.filter( num => num < 10);

//Reduce - Accumulate a value by doing something to each item in an array.
// var newNumbers = numbers.reduce(function (accumulator, currentNumber) {
//         return accumulator + currentNumber;
//     })


//Round 3: SUCCESS!!! Note: In this variation, curly brackets and return are necessary in order for this function to work as intended.
// var newNumbers = numbers.reduce((accumulator, currentNumber) => {
//     return accumulator + currentNumber
// })


////Find - find the first item that matches from an array.
// const newNumbers = numbers.find(function (num) {
//       return num > 10;
//     })


//Round 4: SUCCESS!!! Note: Discovered that if I add or remove the semicolon at the end of the function and then save, an error occurs on chrome devTools. I will need to look into this.
// const newNumbers = numbers.find ( num => num > 10)

////FindIndex - find the index of the first item that matches.
// const newNumbers = numbers.findIndex(function (num) {
    //   return num > 10;
    // })

//Round 5: SUCCESS!!!
// const newNumbers = numbers.findIndex (num => num > 10)
//     console.log(newNumbers)
