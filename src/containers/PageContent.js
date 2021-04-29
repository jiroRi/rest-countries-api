import React from "react";
import styled from "styled-components";

export const PageContent = (props) => <Body>{props.children}</Body>;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  overflow-y: scroll;

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

  @media ${(props) => props.theme.device.desktopS} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
