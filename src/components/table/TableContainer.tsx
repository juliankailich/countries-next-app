import React from "react";
import { GridColDef } from "@mui/x-data-grid";
import { CountriesTable } from "./Table";
import {
  CountriesContainer,
  Country,
} from "@/shared/model/countries/countries.model";

const TableContainer = ({ countries }: CountriesContainer) => {

  const columns: GridColDef[] = [
    { field: "name", headerName: "Country", width: 130 },
    { field: "capital", headerName: "Capital", width: 80 },
    { field: "continent", headerName: "Continent", width: 80, align: "center" },
    { field: "code", headerName: "Code", width: 80, align: "center" }
  ];

  return (
    <CountriesTable
      columns={columns}
      rows={countries?.map((country: Country) => {
        return {
          ...country,
          id: country.name,
        };
      })}
    />
  );
};

export default TableContainer;
