import React from "react";
import styled from "styled-components";

import { Down } from "../Icon";

export const Filter = (props) => (
  <Button {...props}>
    <Down />
    {props.children}
  </Button>
);

const Button = styled.button`
  position: relative;

  min-width: 200px;
  padding: 1.8rem 2.4rem;
  background-color: ${(props) => props.theme.componentBg};
  box-shadow: ${(props) => props.theme.boxShadow.search};
  border-radius: 5px;

  color: ${(props) => props.theme.search};
  font-size: ${(props) => props.theme.mobileFontSizes.filter};
  font-weight: 300;
  text-align: left;

  outline: none;
  border: none;
  cursor: pointer;
`;
