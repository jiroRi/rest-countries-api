import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const Title = (props) => (
  <Link to="/">
    <Text {...props}>Where in the world?</Text>
  </Link>
);

const Text = styled.h1`
  padding: 0.8rem 0;
  margin: 0;

  color: ${(props) => props.theme.title};
  font-size: ${(props) => props.theme.mobileFontSizes.title};
  font-weight: 800;

  cursor: pointer;

  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.desktopFontSizes.title};
  }
`;
