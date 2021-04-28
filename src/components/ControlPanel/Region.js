import React from "react";
import styled from "styled-components";

export const Region = (props) => (
  <Container {...props}>{props.children}</Container>
);

const Container = styled.div`
  padding: 8px 24px;
  background-color: hotpink;

  cursor: pointer;
`;
