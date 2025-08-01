import React from "react";
import { graphql, useLazyLoadQuery } from "react-relay";
// import { graphql } from "react-relay";

const CountriesQuery = graphql`
  query CountriesListQuery {
    countries {
      code
      name
      emoji
    }
  }
`;

export default function CountriesList() {
  const data = useLazyLoadQuery(CountriesQuery, {});

  return (
    <div>
      <h2> List of Countries </h2>
      <ul>
        {data.countries.map((c) => (
          <li key={c.code}>
            {c.emoji} {c.name} ({c.code})
          </li>
        ))}
      </ul>
    </div>
  );
}
