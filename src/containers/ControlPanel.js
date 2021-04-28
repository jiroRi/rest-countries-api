import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { CountryContext } from "../CountryContext";
import { Filter, Search, Regions, Region } from "../components/ControlPanel";

export const ControlPanel = () => {
  const [search, setSearch] = useState("");
  const { setFilteredCountries, countries } = useContext(CountryContext);
  const [select, setSelect] = useState("Filter by Region");
  const [selectOpened, setSelectOpened] = useState(false);

  useEffect(() => {
    const filter = countries.filter((country) => {
      return country.region.toLowerCase() === select.toLowerCase();
    });
    setFilteredCountries(filter);

    const result = countries.filter((country) => {
      return (
        country.region === select &&
        (country.name.toLowerCase().includes(search.toLowerCase()) ||
          country.region.toLowerCase().includes(search.toLowerCase()) ||
          country.capital.toLowerCase().includes(search.toLowerCase()))
      );
    });
    setFilteredCountries(result);
  }, [search, select]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const selectHandler = (value) => {
    setSelect(value);
    setSelectOpened((prevState) => !prevState);
  };

  return (
    <Container>
      <Search
        type="text"
        placeholder="awit"
        value={search}
        onChange={(event) => searchHandler(event)}
      />
      <Filter
        onClick={() => {
          setSelectOpened(!selectOpened);
        }}
      >
        {select}
      </Filter>
      {selectOpened ? (
        <Regions opened={setSelectOpened}>
          <Region onClick={() => selectHandler("Africa")}>Africa</Region>
          <Region onClick={() => selectHandler("Americas")}>Americas</Region>
          <Region onClick={() => selectHandler("Asia")}>Asia</Region>
          <Region onClick={() => selectHandler("Europe")}>Europe</Region>
          <Region onClick={() => selectHandler("Oceania")}>Oceania</Region>
        </Regions>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 30px 20px 0 20px;
`;
