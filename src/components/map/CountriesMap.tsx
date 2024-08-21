import React from "react";
import Image from "next/image";
import Map, { Marker } from "react-map-gl";
import { CountriesProps } from "@/shared/model/countries/countries.model";
import "mapbox-gl/dist/mapbox-gl.css";

const CountriesMap = ({ mapStyle, mapToken, countries }: CountriesProps) => {
  return (
    <Map
      initialViewState={{
        latitude: 32.0,
        longitude: -68.0,
        zoom: 1,
      }}
      style={{
        width: "40vw",
        height: "70vh",
        overflow: "hidden",
        display: "flex",
      }}
      mapStyle={mapStyle}
      mapboxAccessToken={mapToken}
    >
      {countries.map((point: any, index: number) => (
        <Marker
          key={index}
          longitude={point.Longitude}
          latitude={point.Latitude}
        >
          <Image
            src="/assets/images/pin.png"
            alt={point.Country}
            width={30}
            height={30}
            style={{
              padding: "0px",
            }}
          />
        </Marker>
      ))}
    </Map>
  );
};

export default CountriesMap;
