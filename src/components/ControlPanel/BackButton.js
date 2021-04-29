import React from "react";
import styled from "styled-components";

import { Back } from "../Icon";

export const BackButton = (props) => {
  return (
    <Button {...props}>
      <Back />
      Back
    </Button>
  );
};

const Button = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.componentBg};
  box-shadow: ${(props) => props.theme.boxShadow.back};
  padding: 1rem 4rem 1rem 3.2rem;
  border-radius: 5px;
  width: 13.6rem;
  margin: 4rem 0;

  color: ${(props) => props.theme.title};
  font-size: ${(props) => props.theme.mobileFontSizes.search};
  font-weight: 300;

  outline: none;
  border: none;
  cursor: pointer;

  @media ${(props) => props.theme.device.laptop} {
    margin: 8rem 0;
  }
`;
