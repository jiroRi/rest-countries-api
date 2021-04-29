import React, { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Countries, Information } from "./pages";
import { Header, PageContainer } from "./containers";
import { CountryContext } from "./CountryContext";
import { lightMode, darkMode } from "./Theme";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  const { isDarkMode, setIsDarkMode } = useContext(CountryContext);

  return (
    <Router>
      <ThemeProvider theme={isDarkMode ? darkMode : lightMode}>
        <GlobalStyle />
        <Header />
        <PageContainer>
          <Switch>
            <Route path="/" exact component={Countries} />
            <Route path="/country/:code" component={Information} />
          </Switch>
        </PageContainer>
      </ThemeProvider>
    </Router>
  );
};

export default App;
