import React from "react";
import { useQuery } from "urql";

const COUNTRIES_QUERY = `
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

function App() {
  const [result] = useQuery({
    query: COUNTRIES_QUERY,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p> Loading...</p>;
  if (error) return <p> ERROR: {error.message}</p>;

  return (
    <div>
      <h1> List of Countries </h1>
      <ul>
        {data.countries.map((country) => (
          <li key={country.code}>
            {country.name} {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
