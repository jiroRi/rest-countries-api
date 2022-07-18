import React, { useContext, useEffect, useState } from "react";
import { CountryContext } from "../CountryContext";
import { Link } from "react-router-dom";
import axios from "axios";
import { animated, useTrail } from 'react-spring'

import { Card, ControlPanel, PageContent, Spinner } from "../containers";

export const Countries = () => {
  const { filteredCountries, setFilteredCountries } = useContext(
    CountryContext
  );
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true)
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setFilteredCountries(response.data);
        console.log('response.data', response.data)
        setLoading(false);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line
  }, []);

  const countries = filteredCountries?.map((country) => (
    <Link to={`/country/${country.cca3}`} key={country.cca3}>
      <Card
        flag={country.flags.svg}
        name={country.name.official}
        population={country.population
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        region={country.region}
        capital={country.capital}
        key={country.cca3}
      />
    </Link>
  ));

  return (
    <>
      <ControlPanel />
      <PageContent>{loading ? <Spinner /> : <Trail>{countries}</Trail>}</PageContent>
    </>
  );
};

const Trail = ({children}) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 500, friction: 50 },
    from: { opacity: 0, transform: 'translateX(-48px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
  })

  return <>
    {trail.map(({ ...style }, index) => (
      <animated.div key={index} style={style}>
        <animated.div>{items[index]}</animated.div>
      </animated.div>
    ))}
  </>
}