import React from "react";
import styled from "styled-components";

export const Moon = () => (
  <Icon viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.384 15.5a7.835 7.835 0 01-5.58-2.305A7.835 7.835 0 01.5 7.616 7.883 7.883 0 014.818.584a.764.764 0 011.077.905 6.879 6.879 0 001.713 6.903 6.836 6.836 0 004.863 2.02c.692.001 1.38-.103 2.04-.307a.763.763 0 01.905 1.077A7.884 7.884 0 018.384 15.5zM4.79 1.743A6.853 6.853 0 001.5 7.616a6.892 6.892 0 0010.252 6.01 6.853 6.853 0 002.505-2.417 7.9 7.9 0 01-4.803-.395A7.83 7.83 0 016.901 9.1a7.88 7.88 0 01-2.11-7.357z" />
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
