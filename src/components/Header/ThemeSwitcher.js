import React, { useContext } from "react";
import styled from "styled-components";

import { CountryContext } from "../../CountryContext";
import { Moon, Sun } from "../Icon";

export const ThemeSwitcher = (props) => {
  const { isDarkMode, setIsDarkMode } = useContext(CountryContext);

  return (
    <Button onClick={() => setIsDarkMode(!isDarkMode)}>
      {isDarkMode ? <Sun /> : <Moon />}
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  background-color: ${(props) => props.theme.componentBg};

  color: ${(props) => props.theme.themeSwitcher};
  font-size: ${(props) => props.theme.mobileFontSizes.themeSwitcher};
  font-weight: 800;

  outline: none;
  border: none;
  cursor: pointer;

  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.desktopFontSizes.themeSwitcher};
  }
`;
