import React from "react";
import styled from "styled-components";

export const PageContent = (props) => <Body>{props.children}</Body>;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 75px;

  & a {
    max-width: 264px;
  }

  @media ${(props) => props.theme.device.laptop} {
    overflow-y: scroll;
  }
`;
