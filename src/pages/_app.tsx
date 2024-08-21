import React, { useEffect, useState } from "react";
import useMapApi from "@/hooks/useMapApi";
import CountriesTable from "@/components/table/TableContainer";
import {
  Body,
  Container,
  Header,
  SpinnerContainer,
  Title,
} from "@/styles/app.style";
import CountriesMap from "@/components/map/CountriesMapContainer";
import Search from "@/components/search/SearchContainer";
import Spinner from "@/components/spinner/SpinnerContainer";
import { Footer } from "@/components/footer/Footer";
import "../styles/home.css";

const App = () => {
  const [search, setSearch] = useState<string>("");
  const [searchType, setSearchType] = useState<string>("name");

  useEffect(() => {
    fetchData(search, searchType);
  }, []);

  const { countries, loading, fetchData } = useMapApi();

  const handleSearch = () => {
    fetchData(search, searchType);
  };

  const searchProps = {
    search,
    setSearch,
    searchType,
    setSearchType,
    handleSearch,
  };

  return (
    <>
      {loading ? (
        <SpinnerContainer>
          <Spinner isLoading={loading} />
        </SpinnerContainer>
      ) : (
        <Container>
          <Header>
            <Title>{`Countries App`}</Title>
          </Header>
          <Search props={searchProps} />
          <Body>
            <CountriesTable countries={countries} />
            <CountriesMap countries={countries} />
          </Body>
          <Footer />
        </Container>
      )}
    </>
  );
};

export default App;
