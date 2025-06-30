import { selector } from "recoil";
import { selectorFamily } from "recoil";

export const fetchPokemonListSelector = selector({
  key: "fetchPokemonListSelector",
  get: async () => {
    const resValue = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
    if (!resValue.ok) throw new Error("Failed to fetch pokemon list");
    const dataValue = await resValue.json();
    return dataValue;
  },
});

export const fetchPokemonDetailsSelector = selectorFamily({
  key: "fetchPokemonDetailsSelector",
  get: (id) => async () => {
    const responseVariable = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    if (!responseVariable.ok) {
      throw new Error("Failed to fetch Pokémon details");
    }
    return await responseVariable.json();
  },
});
