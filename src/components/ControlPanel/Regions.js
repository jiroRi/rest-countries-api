import React from "react";
import styled from "styled-components";

export const Regions = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

const Container = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  z-index: 10000;

  display: flex;
  flex-flow: column;
  width: 100%;
  background-color: ${(props) => props.theme.componentBg};
  box-shadow: ${(props) => props.theme.boxShadow.regions};
  border-radius: 5px;
`;
