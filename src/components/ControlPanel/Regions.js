import React from "react";
import styled from "styled-components";

export const Regions = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 160px;
`;
