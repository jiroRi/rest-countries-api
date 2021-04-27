import React from "react";
import { CountryProvider } from "./CountryContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Countries, Information } from "./pages";
import { ControlPanel } from "./containers";

const App = () => {
  return (
    <Router>
      <CountryProvider>
        <ControlPanel />
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/country/:code" component={Information} />
        </Switch>
      </CountryProvider>
    </Router>
  );
};

export default App;
