import React from "react";
import styled from "styled-components";

import { Title, ThemeSwitcher } from "../components/Header";

export const Header = () => (
  <Container>
    <Title />
    <ThemeSwitcher />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 8rem;
  padding: 0 8rem;

  background-color: ${(props) => props.theme.componentBg};
  box-shadow: ${(props) => props.theme.boxShadow.header};
`;
