import React, { useState, useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { CountryProvider } from "./CountryContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Countries, Information } from "./pages";
import { Header } from "./containers";
import { CountryContext } from "./CountryContext";
import { lightMode, darkMode } from "./Theme";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const { isDarkMode, setIsDarkMode } = useContext(CountryContext);

  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
        <Header />
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route path="/country/:code" component={Information} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
