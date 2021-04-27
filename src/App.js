import React from "react";
import { CountryProvider } from "./CountryContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Countries, Information } from "./pages";

const App = () => {
  return (
    <Router>
      <CountryProvider>
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/country/:name" component={Information} />
        </Switch>
      </CountryProvider>
    </Router>
  );
};

export default App;
