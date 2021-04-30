import React, { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";

import { CountryContext } from "../CountryContext";
import { Filter, Search, Regions, Region } from "../components/ControlPanel";

export const ControlPanel = () => {
  const [search, setSearch] = useState("");
  const { setFilteredCountries, countries } = useContext(CountryContext);
  const [select, setSelect] = useState("Filter by Region");
  const [selectOpened, setSelectOpened] = useState(true);

  const selectRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", closeSelectHandler);
    return () => {
      document.removeEventListener("mousedown", closeSelectHandler);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const result = countries.filter((country) => {
      if (select === "Filter by Region" || select === "All") {
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
    if (select === "All") {
      setFilteredCountries(countries);
    }

    if (select !== "All") {
      const filter = countries.filter((country) => {
        return country.region.toLowerCase() === select.toLowerCase();
      });
      setFilteredCountries(filter);
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

  const closeSelectHandler = (event) => {
    if (selectRef.current.contains(event.target)) return;

    setSelectOpened(!selectOpened);
  };

  return (
    <Container>
      <Search value={search} onChange={(event) => searchHandler(event)} />
      <FilterContainer ref={selectRef}>
        <Filter
          onClick={() => {
            setSelectOpened(!selectOpened);
          }}
        >
          {select}
        </Filter>
        {selectOpened ? (
          <Regions>
            <Region onClick={() => selectHandler("All")}>All</Region>
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
