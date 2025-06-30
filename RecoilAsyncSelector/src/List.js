import React from "react";
import { useRecoilValueLoadable } from "recoil";
import { fetchPokemonListSelector } from "./selectors";
import Card from "./Card";

const List = () => {
  const pokemonLoadable = useRecoilValueLoadable(fetchPokemonListSelector);

  if (pokemonLoadable.state === "loading") return <div>Loading...</div>;
  if (pokemonLoadable.state === "hasError")
    return <div>Error: {pokemonLoadable.contents.message}</div>;

  const pokemonList = pokemonLoadable.contents;

  return (
    <div>
      <ul>
        {pokemonList?.results.map((pokemon) => (
          <Card key={pokemon.url} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
};

export default List;
