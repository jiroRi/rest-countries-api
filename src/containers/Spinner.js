import React from "react";
import styled from "styled-components";
import { Ring } from "react-awesome-spinners";

export const Spinner = () => (
  <Container>
    <Ring size={160} sizeUnit="px" width="24" />
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 25000;

  width: 12rem;
  height: 12rem;

  div > div {
    border: 2rem solid ${(props) => props.theme.title};
    border-color: ${(props) => props.theme.title} transparent transparent
      transparent;
  }

  transform: translate(-50%, -50%);
`;
