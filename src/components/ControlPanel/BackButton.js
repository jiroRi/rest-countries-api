import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const BackButton = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
    console.log(history);
  };

  return (
    <Container>
      <Button onClick={goBack}>Back</Button>
    </Container>
  );
};

const Container = styled.div``;
const Button = styled.button`
  outline: none;
  border: none;
`;
