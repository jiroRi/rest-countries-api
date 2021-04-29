import React from "react";
import styled from "styled-components";

export const Search = () => (
  <Icon fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
    <path
      d="M11.176 12.995a6.75 6.75 0 111.59-1.59l5.42 5.418a1.124 1.124 0 11-1.59 1.59l-5.42-5.418zm.59-5.503a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0z"
      fill="#000"
    />
  </Icon>
);

const Icon = styled.svg`
  position: absolute;
  top: 50%;
  left: 3.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;

  transform: translateY(-50%);
  pointer-events: none;

  path {
    fill: ${(props) => props.theme.title};
  }
`;
