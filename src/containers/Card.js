import React from "react";
import styled from "styled-components";

import { Flag, DetailsSummary, Text } from "../components/Card";

export const Card = (props) => {
  return (
    <Container>
      <Flag flag={props.flag} />
      <DetailsSummary>
        <Text variant="title">{props.name}</Text>
        <Text variant="body">
          <strong>Population:</strong> {props.population}
        </Text>
        <Text variant="body">
          <strong>Region:</strong> {props.region}
        </Text>
        <Text variant="body">
          <strong>Capital:</strong> {props.capital}
        </Text>
      </DetailsSummary>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: 327px;
  min-height: 336px;
  border-radius: 4px;
  box-shadow: 0px 8px 16px hsla(0, 0%, 52%, 0.15);

  cursor: pointer;

  @media ${(props) => props.theme.device.tablet} {
    max-width: 264px;
  }
`;
