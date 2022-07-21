import React, {useState} from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  
  const [currentTime, getTime] = useState(time);
  const [activeTime, retrieveTime] = useState("Active Time");
  
  function newTime(){
    const whatTimeItIs = new Date().toLocaleTimeString();
    getTime(whatTimeItIs)
  }

  setInterval(updateTime, 1000);
  
  function updateTime() {
    const everySecond = new Date().toLocaleTimeString();
    retrieveTime(everySecond);
  } setInterval(activeTime, 1000);
  
  
  return (
    <div className="container">
      <h1> Click Time
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {currentTime}</h1>
      <button onClick={newTime}>Get Time</button>
      <br></br>
      <br></br>
      <br></br>
      <h1>Active Time 
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {activeTime}</h1>
    </div>
  );
}


export default App;


//Challenge:
//1. Given that you can get the current time using:
// console.log(time);
//Show the latest time in the <h1> when the Get Time button
//is pressed.

//2. Given that you can get code to be called every second
//using the setInterval method.
//Can you get the time in your <h1> to update every second?

//e.g. uncomment the code below to see Hey printed every second.
// function sayHi() {
//   console.log("Hey");
// }
// setInterval(sayHi, 1000);
