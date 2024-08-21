import { useState } from "react";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { Country } from "@/shared/model/countries/countries.model";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://countries.trevorblades.com",
});

const useMapApi = () => {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (search: string, searchType: string) => {
    const query = gql`
      query getCountries($filter: CountryFilterInput) {
        countries(filter: $filter) {
          code
          name
          continent {
            code
            name
          }
          capital
        }
      }
    `;

    let formattedSearch: string = search;
    if (searchType === "code" || searchType === "continent") {
      formattedSearch = search.toUpperCase();
    } else if (searchType === "name") {
      formattedSearch = search.toLocaleLowerCase();
      formattedSearch =
        formattedSearch.charAt(0).toUpperCase() + formattedSearch.slice(1);
    }

    const filter = {
      [searchType]: {
        regex: formattedSearch,
      },
    };

    try {
      setError(null);
      setLoading(true);
      const { data } = await client.query({
        query,
        variables: {
          filter,
        },
        fetchPolicy: "network-only",
      });

      setCountries(data.countries);
    } catch (error) {
      /* acá podríamos trabajar con algun componente de alerta para darle feedback al usuario sobre el fallo. Para este caso que es un challenge simplemento lo seteo en el state */
      setError("Unexpected error. Try later.");
    } finally {
      setLoading(false);
    }
  };

  return { countries, loading, error, fetchData };
};

export default useMapApi;
