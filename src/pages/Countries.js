import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../CountryContext";
import { Link } from "react-router-dom";
import axios from "axios";

import { Card, ControlPanel, PageContent } from "../containers";

export const Countries = () => {
  const { filteredCountries, setFilteredCountries } = useContext(
    CountryContext
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setFilteredCountries(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const countries = filteredCountries.map((country) => (
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
  ));

  return (
    <>
      <ControlPanel />
      <PageContent>{loading ? <h1>loading...</h1> : countries}</PageContent>
    </>
  );
};
