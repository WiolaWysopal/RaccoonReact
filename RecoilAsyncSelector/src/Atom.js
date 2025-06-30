import { atom, atomFamily } from "recoil";

export const pokemonListUrlAtom = atom({
  key: "pokemonListUrlAtom",
  default: "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0",
});

export const pokemonIdAtom = atomFamily({
  key: "pokemonIdAtom",
  default: (id) => id,
});
