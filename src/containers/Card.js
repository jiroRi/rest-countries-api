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
  min-height: 336px;
  max-width: 327px;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.boxShadow.card};

  cursor: pointer;

  @media ${(props) => props.theme.device.tablet} {
    max-width: 264px;
  }
`;
