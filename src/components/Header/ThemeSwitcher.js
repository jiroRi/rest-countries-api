import React, { useContext } from "react";
import styled from "styled-components";

import { CountryContext } from "../../CountryContext";

export const ThemeSwitcher = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(CountryContext);

  return (
    <Button onClick={() => setIsDarkMode(!isDarkMode)}>Switch Theme</Button>
  );
};

const Button = styled.button``;
