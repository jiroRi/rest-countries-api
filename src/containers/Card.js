import React from "react";
import styled from "styled-components";

import { Flag, DetailsSummary } from "../components/Card";

export const Card = (props) => {
  return (
    <Container>
      <Flag flag={props.flag} />
      <DetailsSummary>
        <p>{props.name}</p>
        <p>Population: {props.population}</p>
        <p>Region: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </DetailsSummary>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 327px;
  min-height: 420px;
  border-radius: 4px;
  box-shadow: 0px 8px 16px hsla(0, 0%, 52%, 0.15);

  cursor: pointer;

  @media ${(props) => props.theme.device.tablet} {
    max-width: 264px;
  }
`;
