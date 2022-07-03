import React from 'react';
import ReactDOM from 'react-dom';


// Initial Trial

// ReactDOM.render(
// <div>
// <h1>My Man!</h1>
// <p>Hey there friend!</p>
// </div>,
//  document.getElementById('root'));


// 1st Challenge: Correct!

// ReactDOM.render(
// <div>
//     <h1>My Man!</h1>
//     <ul>
//         <li>Yes!</li>
//         <li>You!</li>
//         <li>Are!</li>
//     </ul>
// </div>,
//  document.getElementById('root'));



// Round 2

// const fName = "Orion";
// const lName = "Palmer";
// const luckyNumber = 27;

// ReactDOM.render(
// <div>
//     <h1>My Man!</h1>
//     <p>Hey there {fName + ' ' + lName}!</p>
//     <p>Template Literal Example {`${fName} ${lName}`}</p>
//     <p>The best number is {luckyNumber}!</p>
//     <p>The best random number is {Math.floor(Math.random() * 10)}!</p>
// </div>,
//  document.getElementById('root'));

//  {} initiates JS expression and variables. Can't write javascript statements.
// Template literal allows space without having to add the + ' ' + like in the 1st paragraph.


// Round 3

// const yourName = "Orion Palmer";
// const copyright = "2022";
// const currentDate = new Date()
// const year = currentDate.getFullYear();
// console.log(currentDate)
// console.log(year);

// ReactDOM.render(
// <div>
// <h1>My Man!</h1>
// <p>Created by {yourName}</p>
// <p>Copyright {copyright}</p>
// <p>This uses the automatically updating current date. {year}</p>
// <p>This also works for automatically updating current date. Month seems to be counted as a 0-11 value however... 
// <br></br>LO
// <br></br>
// {currentDate.getDate()}, {currentDate.getMonth()}, {currentDate.getFullYear()}</p>
// </div>,
//  document.getElementById('root'));


// Round 4
// Using classNames and HTML global attributes in React.
// import React from "react";
// import ReactDOM from "react-dom";

// const img = "https://picsum.photos/200/"

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       My Favourite Foods
//       <img className="img-size" src={img + "?grayscale"} />
//     </h1>
//       {/* closing tag at the end like above is necessary other when inserting into another element in JSX*/}
//     </div>
//     <v>

//     <ul>


//         <img className="img-size" src="https://www.bing.com/images/search?view=detailV2&ccid=Y3CO2x%2bP&id=72B73D17D8C1E68A72A37875E03F6615DD93C513&thid=OIP.Y3CO2x-POdHWmDoeDd4X3gHaE8&mediaurl=https%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f40000%2fvelka%2fsea-breeze-3.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.63708edb1f8f39d1d6983a1e0dde17de%3frik%3dE8WT3RVmP%252bB1eA%26pid%3dImgRaw%26r%3d0&exph=1280&expw=1920&q=sea+breeze&simid=607994600141236995&FORM=IRPRST&ck=ED7D781A04E4E5337B243B5006C694D7&selectedIndex=11"</img>

//         <img className="img-size" src="https://www.bing.com/images/search?view=detailV2&ccid=Y3CO2x%2bP&id=72B73D17D8C1E68A72A37875E03F6615DD93C513&thid=OIP.Y3CO2x-POdHWmDoeDd4X3gHaE8&mediaurl=https%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f40000%2fvelka%2fsea-breeze-3.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.63708edb1f8f39d1d6983a1e0dde17de%3frik%3dE8WT3RVmP%252bB1eA%26pid%3dImgRaw%26r%3d0&exph=1280&expw=1920&q=sea+breeze&simid=607994600141236995&FORM=IRPRST&ck=ED7D781A04E4E5337B243B5006C694D7&selectedIndex=11"</img>

//         <img className="img-size" src="https://www.bing.com/images/search?view=detailV2&ccid=Y3CO2x%2bP&id=72B73D17D8C1E68A72A37875E03F6615DD93C513&thid=OIP.Y3CO2x-POdHWmDoeDd4X3gHaE8&mediaurl=https%3a%2f%2fwww.publicdomainpictures.net%2fpictures%2f40000%2fvelka%2fsea-breeze-3.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.63708edb1f8f39d1d6983a1e0dde17de%3frik%3dE8WT3RVmP%252bB1eA%26pid%3dImgRaw%26r%3d0&exph=1280&expw=1920&q=sea+breeze&simid=607994600141236995&FORM=IRPRST&ck=ED7D781A04E4E5337B243B5006C694D7&selectedIndex=11"</img>
//     </ul>
//   </div>
//   document.getElementById("root")
//   );
  

// Round 5

// Creating Inline Styles within JavaScript React

// import React from "react";
// import ReactDOM from "react-dom";

// const customStyle = {
//   color: "red",
//   fontSize: "20px",
//   border: "8px solid black",
//   padding: "20px",
//   textAlign: "center"
// };
// // creating is similar to css. Keep in mind comma must be used instead of semicolon because we are operating within a javascript document.

// customStyle.color = "blue";

// ReactDOM.render(
//   <h1 style={customStyle}>Hello World!</h1>,
//   document.getElementById("root")
// );


// Round 6

// React Styling Practice Test

//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

// 1
import React from "react";
import ReactDOM from "react-dom";

const date = new Date();
const time = date.getHours()

let greeting;
let customStyle = {
  color: ""
};

if (time < 12) {
  greeting = "Good Morning"
  customStyle.color = "red"
} else if (time <18) {
  greeting = "Good Afternoon"
  customStyle.color = "green"
} else {
  greeting = "Good Night"
  customStyle.color = "blue"
}

// 2
ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>{greeting}</h1>
  </div>,
document.getElementById('root'));


// Takeaways: When it comes to if/else statement, a function is not needed especially if the variable being customized is going to be placed within the same rendered document. So don't overthink it like you would with html/css. Also keep in mind that aspect of being specific with css selectors and using the . to select the element to be altered. Aside from that, I did fine. It really is just getting used to writing a function that did not need to be declared or listened for that was my main hang up.
