import React from "react";
import CountriesMap from "./CountriesMap";
import { DEFAULT_COUNTRIES } from "@/shared/countries";
import { CountriesContainer, Country } from "@/shared/model/countries/countries.model";

const CountriesMapContainer = ({ countries }: CountriesContainer) => {  
  const mapStyle = "mapbox://styles/mapbox/dark-v11";
  const mapToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  const countryNames = new Set(countries.map((country: Country) => country.name));

  const filteredCountries = DEFAULT_COUNTRIES.filter((point) =>
    countryNames.has(point.Country)
  );

  return (
    <CountriesMap
      mapStyle={mapStyle}
      mapToken={mapToken}
      countries={filteredCountries}
    />
  );
};

export default CountriesMapContainer;
