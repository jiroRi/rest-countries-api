import React, { useContext, useEffect } from "react";
import { CountryContext } from "../CountryContext";
import { Link } from "react-router-dom";
import axios from "axios";

import { Card, ControlPanel, PageContent } from "../containers";

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
      <PageContent>
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
      </PageContent>
    </>
  );
};
