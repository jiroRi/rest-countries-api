import React from "react";
import styled from "styled-components";

export const DetailsSummary = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 32px;
`;
