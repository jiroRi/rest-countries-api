import React from "react";
import styled from "styled-components";

export const PageContainer = (props) => <Body>{props.children}</Body>;

const Body = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0 2rem;

  @media ${(props) => props.theme.device.laptop} {
    padding: 0 8rem;
    height: 944px;
    max-height: 944px;
  }
`;
