export interface Props {
  search: string;
  setSearch: Function;
  searchType: string;
  setSearchType: Function;
  handleSearch: Function;
}

export interface SearchProps {
  props: Props;
}
