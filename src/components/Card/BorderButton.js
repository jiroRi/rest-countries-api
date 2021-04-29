import React from "react";
import styled from "styled-components";

export const BorderButton = (props) => (
  <Button {...props}>{props.children}</Button>
);

const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.componentBg};
  box-shadow: ${(props) => props.theme.boxShadow.borders};

  color: ${(props) => props.theme.title};

  font-weight: 800;

  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5;
`;
