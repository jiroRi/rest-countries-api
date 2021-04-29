import React from "react";
import styled from "styled-components";

export const DetailsFull = (props) => <Container>{props.children}</Container>;

const Container = styled.div`
  display: flex;
  flex-flow: column;

  width: 100%;

  @media ${(props) => props.theme.device.laptop} {
    flex-flow: row;
    justify-content: space-between;
  }
`;
