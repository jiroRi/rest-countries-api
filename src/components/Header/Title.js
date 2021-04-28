import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

export const Title = (props) => (
  <Link to="/">
    <Text {...props}>Where in the world?</Text>
  </Link>
);

const Text = styled.h1`
  padding: 8px 24px;

  cursor: pointer;
`;
