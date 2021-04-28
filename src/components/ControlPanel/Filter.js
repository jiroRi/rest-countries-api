import React from "react";
import styled from "styled-components";

export const Filter = (props) => <Button {...props}>{props.children}</Button>;

const Button = styled.button`
  padding: 8px 24px;
  background-color: #222;
  color: white;

  outline: none;
  border: none;
`;
