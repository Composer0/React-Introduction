import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

class App extends React.Component {
  render() {
    return <ClassComponent />;
  }
}

export default App;

//classes are not called like a function. Can remove parenthesis. Must extend into a React Component. Component is rendered in a render method. Using classes was originally done in order to use states in React.
// https://reactjs.org/docs/state-and-lifecycle.html 

// Creating hooks in 2018 was to limit the amount bindings and additional work that had to take place in order to use the useState.bind
// https://reactjs.org/docs/hooks-intro.html

// Hooks are encouraged by the react team for new code. It essentially hides some of the boilerplate/setup that would be required in creating a useState. [1, 2] the 1st value that we use currently originally had to be set up and created with values being bound to it. Not to mention that it also uses 'this'.
