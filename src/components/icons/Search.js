import React from "react";
import styled from "styled-components";

export const Search = () => (
  <Icon fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.176 12.995a6.75 6.75 0 111.59-1.59l5.42 5.418a1.124 1.124 0 11-1.59 1.59l-5.42-5.418zm.59-5.503a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
      fill="#000"
    />
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
