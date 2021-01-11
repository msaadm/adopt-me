import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {

  return (
    <div>
    <div></div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Maano" animal="Cat" breed="Persian" />
      <Pet name="Roman" animal="Bird" breed="Love Bird" />
    </div>
  )

};

render(<App/>, document.getElementById("root"));
