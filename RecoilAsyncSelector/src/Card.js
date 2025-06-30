import React from "react";
import { Link } from "react-router-dom";
import { fetchPokemonDetailsSelector } from "./selectors";

import { useRecoilValueLoadable } from "recoil";

const Card = ({ pokemon }) => {
  const id = pokemon.url.split("/")[6];
  const loadable = useRecoilValueLoadable(fetchPokemonDetailsSelector(id));

  if (loadable.state === "loading") {
    return <div>Loading {pokemon.name}...</div>;
  }

  if (loadable.state === "hasError") {
    return <div>Error loading {pokemon.name}</div>;
  }

  const pokemonDetails = loadable.contents;

  return (
    <div key={pokemon.name}>
      <img
        src={pokemonDetails.sprites.back_default}
        alt={pokemonDetails.name}
      />
      <Link to={`/pokemon/${id}`}>{pokemon.name}'s Page</Link>
      <span>{pokemon.name}</span>
    </div>
  );
};

export default Card;
