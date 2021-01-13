import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router"
import SearchParams from "./SearchParams"
import DetailsWithErrorBoundary from "./details";

const App = () => {

  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <DetailsWithErrorBoundary path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  )

};

render(<App/>, document.getElementById("root"));
