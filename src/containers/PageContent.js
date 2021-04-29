import React from "react";
import styled from "styled-components";

export const PageContent = (props) => <Body>{props.children}</Body>;

const Body = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2.4rem;

  overflow-y: scroll;
  overflow-x: hidden;

  & a {
    display: inline-block;
    max-width: 264px;

    margin: 0 auto;

    @media ${(props) => props.theme.device.laptop} {
      margin: 0;
    }
  }

  @media ${(props) => props.theme.device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${(props) => props.theme.device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 3.75rem;
  }

  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
  }

  @media ${(props) => props.theme.device.desktopS} {
    grid-grap: 7.5rem;
  }

  @media ${(props) => props.theme.device.desktopM} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media ${(props) => props.theme.device.desktopL} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
