import React from "react";
import ClassCounter from "./components/FunctionalCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import "./App.css";

function App(){
  return(
    <div>
      <h1>React state change example</h1>
      <ClassCounter></ClassCounter>
      <FunctionalCounter></FunctionalCounter>
    </div>
  );
}

export default App;