import React from "react";
// import Form from "./Form";
import Form from "./Yu Solution";


var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Form 
        isRegistered={userIsRegistered}
      />
    </div>
  );
}

export default App;
export {userIsRegistered};
