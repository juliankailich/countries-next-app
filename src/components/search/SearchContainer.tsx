import React from "react";
import { Search } from "./Search";
import { SearchProps } from "@/shared/model/search/search.model";

const SearchContainer = ({ props }: SearchProps) => {
  return <Search props={props} />;
};

export default SearchContainer;
