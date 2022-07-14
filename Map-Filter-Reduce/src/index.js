// var numbers = [3, 56, 2, 48, 5];





//MAP METHOD
//Map -Create a new array by doing something with each item in an array.

// function double(x) {
//   return x * 2;
// }

// const newNumbers = numbers.map(double);
// console.log(newNumbers);

//*Anonymous Version*
// const newNumbers = numbers.map(function (x) {
//   return x * 2;
// });
// console.log(newNumbers);

//MAP METHOD



//FOREACH METHOD

// var newNumbers = [];
// numbers.forEach(function (x) {
//   newNumbers.push(x * 2);
// });

// console.log(newNumbers);

//FOREACH METHOD


//FILTER METHOD
//Filter - Create a new array by keeping the items that return true.

// const newNumbers = numbers.filter(function (num) {
  //   return num < 10
  // }); 
  //num is not real prior to creating this function. Its used to assign a category to the value being filtered for.
  
  
  // var newNumbers = [];
  // numbers.forEach(function(num) {
    //   if (num < 10) {
//     newNumbers.push(num);
//   }
// })
//Does the same as filter but a bit more clunky. This was the old way doing a filter and used the push.

//FILTER MEHTOD




//REDUCE METHOD
//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber = numbers.reduce(function (accumulator, currentNumber) {
//   console.log("accumulator = " + accumulator);
//   console.log("currentNumber = " + currentNumber);
//   return accumulator + currentNumber;
// })
// console.log(newNumber);
//accumlator is the equivalent to the var newNumber shown below. In our case 0


// var newNumber = 0;
// numbers.forEach(function (currentNumber) {
  //   newNumber += currentNumber
  // })
  
//REDUCE METHOD
  
  

  
//FIND METHOD
//Find - find the first item that matches from an array.

// const newNumber = numbers.find(function (num) {
  //   return num > 10;
  // })
  
  // console.log(newNumber);
  //Doesn't loop through the entire array. It stops at the first item.
  
  //FIND METHOD
  
  
  
  
  
  //FINDINDEX METHOD
  //FindIndex - find the index of the first item that matches.
  
  // const newNumber = numbers.findIndex(function (num) {
    //   return num > 10;
    // })
    
    //Similar to find but in this case it show the index instead of the value.
    
    // console.log(newNumber);
    //FINDINDEX METHOD







//CHALLENGE!!!
import emojipedia from "./emojipedia";
const newMeanings = emojipedia.map(function (emojiEntry) {

  return emojiEntry.meaning.substring(0, 100)
})
//emojiEntry does not exist prior. It is a word that you make up to assign value. Whenever you are using map filter reduce ect. Just keep that in mind for future reference. The words used just has to make enough sense for someone who reviews your code.

console.log(newMeanings)
// console.log(emojipedia.sustring(0, 99));
// console.log(emojipedia);



//Challenge Solution

