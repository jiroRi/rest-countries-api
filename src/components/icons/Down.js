import React from "react";
import styled from "styled-components";

export const Down = () => (
  <Icon fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.97.257L5.204 3.49 8.437.257a.83.83 0 111.175 1.175L5.787 5.257a.83.83 0 01-1.175 0L.787 1.432a.83.83 0 010-1.175.848.848 0 011.183 0z" />
  </Icon>
);

const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.4rem;
  height: 2.4rem;

  path {
    fill: ${(props) => props.theme.title};
  }
`;
