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
  width: 100%;
`;
