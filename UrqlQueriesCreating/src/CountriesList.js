import React from "react";
import { useQuery } from "urql";

const CountriesQuery = `
  query {
    countries {
      code
      name
    }
  }
`;

function CountriesList() {
  const [result] = useQuery({ query: CountriesQuery });
  const { data, fetching, error } = result;

  if (fetching) return <p> Data loading...</p>;
  if (error) return <p> ERROR: {error.message}</p>;

  return (
    <ul>
      {data.countries.map((country) => (
        <li key={country.code}>
          {country.name} ({country.code})
        </li>
      ))}
    </ul>
  );
}

export default CountriesList;
