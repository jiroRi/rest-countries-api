import React from "react";
import styled from "styled-components";

export const PageContent = (props) => <Body>{props.children}</Body>;

const Body = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  overflow-y: scroll;
  overflow-x: hidden;

  & a {
    display: inline-block;
    margin: auto;
  }

  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: 1fr 1fr;
    grid-gap: 37.5px;
  }

  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 37.5px;
  }

  @media ${(props) => props.theme.device.desktopS} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media ${(props) => props.theme.device.desktopM} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media ${(props) => props.theme.device.desktopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
