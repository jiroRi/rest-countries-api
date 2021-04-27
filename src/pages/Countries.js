import React, { useContext } from "react";
import { CountryContext } from "../CountryContext";
import { Link } from "react-router-dom";

import { Card } from "../containers";

export const Countries = () => {
  const { countries } = useContext(CountryContext);

  return (
    <>
      {countries.map((country) => (
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
