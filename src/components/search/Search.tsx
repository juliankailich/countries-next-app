import React from "react";
import { SEARCH_TYPE_PLACEHOLDERS } from "@/shared/constants";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SearchProps } from "@/shared/model/search/search.model";
import { Container, Input, Select } from "./search.style";

export const Search = ({ props }: SearchProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearch(e.target.value);
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.setSearchType(e.target.value);
    props.setSearch("");
  };
  return (
    <Container>
      <Select value={props.searchType} onChange={handleSelectChange}>
        <option value="name">Name</option>
        <option value="code">ISO Code</option>
        <option value="continent">Region</option>
      </Select>
      <Input
        placeholder={SEARCH_TYPE_PLACEHOLDERS[props.searchType]}
        value={props.search}
        onChange={handleSearchChange}
      />
      <FontAwesomeIcon
        color={"white"}
        icon={faSearch}
        onClick={() => {
          props.handleSearch();
        }}
        style={{ cursor: "pointer" }}
        pulse={false}
      />
    </Container>
  );
};
