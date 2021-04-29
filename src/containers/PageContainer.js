import React from "react";
import styled from "styled-components";

export const PageContainer = (props) => <Body>{props.children}</Body>;

const Body = styled.div`
  display: flex;
  flex-flow: column;
  padding: 0 2rem 4.8rem 2rem;
  width: 100%;
  max-height: calc(100vh - 8rem);

  @media ${(props) => props.theme.device.laptop} {
    padding: 0 8rem 4.8rem 8rem;
    height: calc(100vh - 8rem);
  }

  @media ${(props) => props.theme.device.desktopS} {
    padding: 0 8rem 4.8rem 8rem;
    height: calc(100vh - 8rem);
    max-height: 944px;
  }

  @media ${(props) => props.theme.device.desktopM} {
    padding: 0 8rem 4.8rem 8rem;
    height: calc(100vh - 8rem);
    max-height: calc(100vh - 8rem);
  }
`;
