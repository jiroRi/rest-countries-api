import React, { useContext } from "react";
import { CountryContext } from "../CountryContext";

export const Countries = () => {
  const { countries, countryDetails, setCountryDetails } = useContext(
    CountryContext
  );

  const countryDetailsHandler = () => {
    const currentCountry = countries.filter((country) => {
      return country.name === "Philippines";
    });

    setCountryDetails({
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
    });

    console.log(currentCountry);
  };

  return (
    <>
      <button onClick={countryDetailsHandler}>Philippines</button>
      <h5>Native Name: {countryDetails.nativeName}</h5>
      <h5>Population: {countryDetails.population}</h5>
      <h5>Region: {countryDetails.region}</h5>
      <h5>Sub-Region: {countryDetails.subRegion}</h5>
      <h5>Languages: {countryDetails.languages}</h5>
      {countries.map((country) => (
        <ul key={country.alpha3Code}>
          <li>{country.name}</li>
        </ul>
      ))}
    </>
  );
};
