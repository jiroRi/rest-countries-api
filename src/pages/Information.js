import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

import { BackButton } from "../components/ControlPanel";

export const Information = ({ match }) => {
  const [currentCountry, setCurrentCountry] = useState(match.params.code);
  const [information, setInformation] = useState({
    borders: [],
  });
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const setBorderAsLink = (border) => {
    setCurrentCountry(border);
    console.log(information);
  };

  useEffect(() => {
    let mounted = true;
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${currentCountry}`)
      .then((response) => {
        if (mounted) {
          setInformation(response.data);
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));

    return () => {
      setCurrentCountry(location.pathname.replace("/country/", ""));
      mounted = false;
    };
  }, [information]);

  return (
    <>
      <BackButton />
      {loading ? (
        <p>loading...</p>
      ) : (
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
      )}
    </>
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
