import React, { useContext, useEffect } from "react";
import { CountryContext } from "../CountryContext";
import { Link } from "react-router-dom";
import axios from "axios";

import { Card, ControlPanel } from "../containers";

export const Countries = () => {
  const { filteredCountries, setFilteredCountries } = useContext(
    CountryContext
  );

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setFilteredCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ControlPanel />
      {filteredCountries.map((country) => (
        <Link to={`/country/${country.alpha3Code}`} key={country.alpha3Code}>
          <Card
            flag={country.flag}
            name={country.name}
            population={country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            region={country.region}
            capital={country.capital}
          />
        </Link>
      ))}
    </>
  );
};

/* setCountryDetails({
    nativeName: currentCountry[0].nativeName,
    population: currentCountry[0].population,
    region: currentCountry[0].region,
    subRegion: currentCountry[0].subregion,
    capital: currentCountry[0].capital,
    topLevelDomain: currentCountry[0].topLevelDomain,
    currencies: currentCountry[0].currencies,
    languages: currentCountry[0].languages
      .map((lang) => lang.name)
      .join(", "),
  }); */
