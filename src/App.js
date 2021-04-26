import React from "react";
import { CountryProvider } from "./CountryContext";

import { Countries } from "./pages/Countries";

const App = () => {
  return (
    <>
      <CountryProvider>
        <Countries />
      </CountryProvider>
    </>
  );
};

export default App;
