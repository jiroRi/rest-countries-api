import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { CountryContext } from "../CountryContext";
import { Search } from "../components/ControlPanel";

export const ControlPanel = () => {
  const [search, setSearch] = useState("");
  const { filteredCountries, setFilteredCountries, countries } = useContext(
    CountryContext
  );

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const result = countries.filter((country) => {
      return (
        country.name.toLowerCase().includes(search.toLowerCase()) ||
        country.region.toLowerCase().includes(search.toLowerCase()) ||
        country.capital.toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredCountries(result);
    console.log(filteredCountries);
  }, [search]);

  return (
    <Container>
      <Search
        type="text"
        placeholder="awit"
        value={search}
        onChange={(event) => searchHandler(event)}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 30px 20px 0 20px;
`;
