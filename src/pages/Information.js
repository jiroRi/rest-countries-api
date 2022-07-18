import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useLocation, useHistory } from "react-router-dom";

import { BackButton } from "../components/ControlPanel";
import { Flag, DetailsFull, Text, BorderButton } from "../components/Card";
import { Spinner } from "../containers";

export const Information = ({ match }) => {
  const [currentCountry, setCurrentCountry] = useState(match.params.code);
  const [information, setInformation] = useState({});
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const setBorderAsLink = (border) => {
    setCurrentCountry(border);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://restcountries.com/v3.1/alpha/${currentCountry}`
      )
      .then((response) => {
        setInformation(response.data[0]);
        console.log("information", response.data[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [currentCountry]);

  useEffect(() => {
    setCurrentCountry(location.pathname.replace("/country/", ""));
    // eslint-disable-next-line
  }, [match]);

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <BackButton onClick={goBack} />
      {loading ? (
        <Spinner />
      ) : (
        <DetailsFull>
          <Flag
            flag={information?.flags?.svg}
            alt={information.name?.official}
            variant="full"
          />

          <InformationContainer>
            <Text variant="full-title">{information.name?.official}</Text>
            <InformationDetails>
              <MainInformation>
                <Text variant="full-body">
                  <strong>Native Name: </strong>
                  {information.name && Object.values(information.name.nativeName)[Object.values(information.name.nativeName).length - 1].common}
                </Text>
                <Text variant="full-body">
                  <strong>Population: </strong>
                  {information?.population
                    ?.toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </Text>
                <Text variant="full-body">
                  <strong>Region: </strong>
                  {information.region}
                </Text>
                <Text variant="full-body">
                  <strong>Sub Region: </strong>
                  {information.subregion}
                </Text>
                <Text variant="full-body">
                  <strong>Capital: </strong>
                  {information?.capital?.map(cap => cap)}
                </Text>
              </MainInformation>
              <SubInformation>
                <Text variant="full-body">
                  <strong>Top Level Domain: </strong>
                  {information?.tld?.map(tld => tld)}
                </Text>
                <TextGroup>
                  <strong>Currencies: </strong>
                  {information.currencies && Object.values(information.currencies).map((currency, index) => (
                    <Text key={currency.name} variant="full-group">
                      {(index ? ", " : "") + currency.name}
                    </Text>
                  ))}
                </TextGroup>
                <TextGroup>
                  <strong>Languages:</strong>
                  {information.languages && Object.values(information.languages).map((language, index) => (
                    <Text key={language} variant="full-group">
                      {(index ? ", " : "") + language}
                    </Text>
                  ))}
                </TextGroup>
              </SubInformation>
            </InformationDetails>
            <BorderGroup>
              {information?.borders?.length && (
                <Text variant="full-body">
                  <strong>Borders: </strong>
                </Text>
              )}
              {information?.borders?.map((border) => (
                <Link to={`/country/${border}`} key={border}>
                  <BorderButton
                    onClick={() => {
                      setBorderAsLink(border);
                      setLoading(true);
                    }}
                  >
                    {border}
                  </BorderButton>
                </Link>
              ))}
            </BorderGroup>
          </InformationContainer>
        </DetailsFull>
      )}
    </>
  );
};

const InformationContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;

  @media ${(props) => props.theme.device.tablet} {
    padding: 2rem 6rem 0 6rem;
  }

  @media ${(props) => props.theme.device.laptop} {
    padding: 2rem 0 0 6rem;
  }

  @media ${(props) => props.theme.device.desktopS} {
    width: 100%;
    padding: 4rem 0 0 12rem;
  }
`;

const InformationDetails = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 100%;
  max-width: 57.6rem;

  @media ${(props) => props.theme.device.tablet} {
    flex-flow: row;
  }
`;

const MainInformation = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;

  @media ${(props) => props.theme.device.laptop} {
    margin-bottom: 4rem;
  }
`;

const SubInformation = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;

  > * {
    margin-bottom: 1rem;
  }
`;

const TextGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  span {
    color: ${(props) => props.theme.cardValue};
    font-size: ${(props) => props.theme.mobileFontSizes.fullLabel};
  }

  @media ${(props) => props.theme.device.tablet} {
    font-size: ${(props) => props.theme.desktopFontSizes.fullLabel};
  }

  strong {
    color: ${(props) => props.theme.cardLabel};
    font-size: ${(props) => props.theme.mobileFontSizes.fullLabel};
    font-weight: 600;
    margin-right: 0.5rem;

    @media ${(props) => props.theme.device.tablet} {
      font-size: ${(props) => props.theme.desktopFontSizes.fullLabel};
    }
  }
`;

const BorderGroup = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;

  > span {
    margin-bottom: 0;
  }

  a {
    width: 12rem;
    height: 4rem;
    font-size: ${(props) => props.theme.mobileFontSizes.border};
    margin: 0.5rem 1rem;

    :first-child {
      margin-left: 5px;
    }

    @media ${(props) => props.theme.device.tablet} {
      width: 9.6rem;
      height: 2.8rem;

      font-size: ${(props) => props.theme.desktopFontSizes.border};
    }
  }
`;
