import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import { CountryContext } from "../CountryContext";
import { Filter, Search, Regions, Region } from "../components/ControlPanel";

export const ControlPanel = () => {
  const [search, setSearch] = useState("");
  const { setFilteredCountries, countries } = useContext(CountryContext);
  const [select, setSelect] = useState("Filter by Region");
  const [selectOpened, setSelectOpened] = useState(true);

  useEffect(() => {
    const result = countries.filter((country) => {
      if (select === "Filter by Region") {
        return (
          country.name.toLowerCase().includes(search.toLowerCase()) ||
          country.region.toLowerCase().includes(search.toLowerCase()) ||
          country.capital.toLowerCase().includes(search.toLowerCase())
        );
      }
      return (
        country.region === select &&
        (country.name.toLowerCase().includes(search.toLowerCase()) ||
          country.region.toLowerCase().includes(search.toLowerCase()) ||
          country.capital.toLowerCase().includes(search.toLowerCase()))
      );
    });

    setFilteredCountries(result);
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    if (select !== "All") {
      const filter = countries.filter((country) => {
        return country.region.toLowerCase() === select.toLowerCase();
      });
      setFilteredCountries(filter);
    } else {
      setFilteredCountries(countries);
    }
    setSearch("");
    // eslint-disable-next-line
  }, [select]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const selectHandler = (value) => {
    setSelect(value);
    setSelectOpened((prevState) => !prevState);
  };

  return (
    <Container>
      <Search value={search} onChange={(event) => searchHandler(event)} />
      <FilterContainer>
        <Filter
          onClick={() => {
            setSelectOpened(!selectOpened);
          }}
        >
          {select}
        </Filter>
        {selectOpened ? (
          <Regions setOpened={setSelectOpened} opened={selectOpened}>
            {/* <Region
              onClick={() => {
                setSelect("All");
                setSelectOpened((prevState) => !prevState);
              }}
            >
              All
            </Region> */}
            <Region onClick={() => selectHandler("Africa")}>Africa</Region>
            <Region onClick={() => selectHandler("Americas")}>America</Region>
            <Region onClick={() => selectHandler("Asia")}>Asia</Region>
            <Region onClick={() => selectHandler("Europe")}>Europe</Region>
            <Region onClick={() => selectHandler("Oceania")}>Oceania</Region>
          </Regions>
        ) : null}
      </FilterContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 3rem 0;

  @media ${(props) => props.theme.device.tablet} {
    flex-flow: row;
    justify-content: space-between;

    padding: 4.8rem 0;
  }
`;

const FilterContainer = styled.div`
  position: relative;
  max-height: 5.6rem;
`;
