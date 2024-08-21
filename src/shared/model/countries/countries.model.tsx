export interface Continent {
  code: string;
  name: string;
  __typename: string;
}

export interface Country {
  capital?: string;
  code?: string;
  name?: string;
  __typename?: string;
  continent?: Continent;
  Country?: string;
  "ISO Code"?: string;
  Latitude?: number;
  Longitude?: number;
}

export interface CountriesContainer {
  countries: Array<Country>;
}

export interface CountriesProps extends CountriesContainer {
  mapStyle?: string;
  mapToken?: string | undefined;
}
