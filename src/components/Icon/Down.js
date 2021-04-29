import React from "react";
import styled from "styled-components";

export const Down = () => (
  <Icon fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6.5">
    <path d="M1.97.257L5.204 3.49 8.437.257a.83.83 0 111.175 1.175L5.787 5.257a.83.83 0 01-1.175 0L.787 1.432a.83.83 0 010-1.175.848.848 0 011.183 0z" />
  </Icon>
);

const Icon = styled.svg`
  position: absolute;
  top: 50%;
  right: 1.8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.1rem;
  height: 0.65rem;

  transform: translateY(-50%);

  path {
    fill: ${(props) => props.theme.title};
  }
`;
