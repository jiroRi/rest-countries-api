import React from "react";
import styled from "styled-components";

export const Region = (props) => (
  <Container {...props}>{props.children}</Container>
);

const Container = styled.div`
  padding: 0.35rem 24px;

  color: ${(props) => props.theme.search};
  font-size: ${(props) => props.theme.mobileFontSizes.regions};
  font-weight: 300;

  cursor: pointer;

  :first-child {
    padding-top: 1.6rem;
    border-radius: 5px 5px 0 0;
  }

  :last-child {
    padding-bottom: 1.6rem;
    border-radius: 0 0 5px 5px;
  }

  &:hover {
    background-color: ${(props) => props.theme.filterHover};
  }
`;
