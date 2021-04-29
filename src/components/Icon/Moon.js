import React from "react";
import styled from "styled-components";

export const Moon = () => (
  <Icon fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">
    <path d="M8.83 16.757A8.286 8.286 0 01.542 8.47c0-3.357 1.929-6.367 4.915-7.667a.571.571 0 01.752.753c-.343.787-.524 1.795-.524 2.914 0 3.939 3.205 7.143 7.143 7.143 1.12 0 2.128-.181 2.915-.524a.571.571 0 01.752.752c-1.3 2.986-4.31 4.915-7.667 4.915z" />
  </Icon>
);

const Icon = styled.svg`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 1rem;

  path {
    fill: ${(props) => props.theme.title};
  }
`;
