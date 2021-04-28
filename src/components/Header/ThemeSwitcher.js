import React, { useContext } from "react";
import styled from "styled-components";

import { CountryContext } from "../../CountryContext";

export const ThemeSwitcher = (props) => {
  const { darkMode, setDarkMode } = useContext(CountryContext);

  return <Button onClick={() => setDarkMode(!darkMode)}>Switch Theme</Button>;
};

const Button = styled.button``;
