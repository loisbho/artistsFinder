import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "../Navbar/index.jsx";
import Wrapper from "../Wrapper/index.jsx";
import Search from "../../pages/Search/index.jsx";

function Routes() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default Routes;
