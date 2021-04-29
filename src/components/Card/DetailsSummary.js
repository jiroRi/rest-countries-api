import React from "react";
import styled from "styled-components";

export const DetailsSummary = (props) => {
  return <Container>{props.children}</Container>;
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 2.4rem 3.2rem;

  /* title */
  & > :first-child {
    margin-bottom: 1.5rem;
  }

  /* others */
  & > :not(:first-child) {
    margin-bottom: 0.5rem;
  }
`;
