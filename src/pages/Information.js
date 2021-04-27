import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

export const Information = ({ match }) => {
  const [currentCountry, setCurrentCountry] = useState(match.params.code);
  const [information, setInformation] = useState({
    borders: [],
  });
  const location = useLocation();

  const setBorderAsLink = (border) => {
    setCurrentCountry(border);
    console.log(information);
  };

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${currentCountry}`)
      .then((response) => {
        setInformation(response.data);
        console.log(location);
      })
      .catch((err) => console.log(err));

    return setCurrentCountry(location.pathname.replace("/country/", ""));
  }, [currentCountry, location]);

  return (
    <Container>
      <p>{information.name}</p>
      <p>{information.region}</p>
      <img src={information.flag} alt={information.name} />
      {information.borders.map((border) => (
        <Link to={`/country/${border}`} key={border}>
          <button onClick={() => setBorderAsLink(border)}>{border}</button>
        </Link>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  padding: 32px;

  img {
    width: 240px;
    height: 160px;
  }
`;
