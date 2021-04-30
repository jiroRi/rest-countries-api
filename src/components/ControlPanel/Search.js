import React from "react";
import styled from "styled-components";

import { Search as Icon } from "../Icon";

export const Search = (props) => (
  <Container>
    <Input {...props} type="text" placeholder="Search for a country..." />
    <Icon />
  </Container>
);

const Container = styled.div`
  position: relative;

  width: 100%;
  max-width: 48rem;
  box-shadow: ${(props) => props.theme.boxShadow.search};
  border-radius: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1.8rem 3.2rem 1.8rem 7.5rem;
  background-color: ${(props) => props.theme.componentBg};

  color: ${(props) => props.theme.search};
  font-size: ${(props) => props.theme.mobileFontSizes.search};
  letter-spacing: 1%;
  outline: none;
  border: none;
  border-radius: 5px;

  &::placeholder {
    color: ${(props) => props.theme.placeholder};
  }
`;
