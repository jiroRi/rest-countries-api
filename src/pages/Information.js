import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const Information = ({ match }) => {
  const [information, setInformation] = useState({});

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${match.params.name}`)
      .then((response) => {
        setInformation(response.data[0]);
        console.log(information);
        console.log(match);
      });
  }, []);

  return (
    <Container>
      <p>{information.name}</p>
      <p>{information.region}</p>
      <img src={information.flag} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 32px;

  img {
    width: 120px;
    height: 80px;
  }
`;
