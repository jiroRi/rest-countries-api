import React, { useState, useEffect } from "react";
import axios from "axios";

export const CountryContext = React.createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState({
    nativeName: "",
    population: "",
    region: "",
    subRegion: "",
    capital: "",
    topLevelDomain: "",
    currencies: "",
    languages: "",
  });

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countries,
        setCountries,
        countryDetails,
        setCountryDetails,
        filteredCountries,
        setFilteredCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};
