import React, { useContext } from "react";
import { CountryContext } from "../CountryContext";

export const Countries = () => {
  const { countries } = useContext(CountryContext);

  return (
    <>
      {countries.map((country) => (
        <ul key={country.alpha3Code}>
          <li>{country.name}</li>
        </ul>
      ))}
    </>
  );
};
