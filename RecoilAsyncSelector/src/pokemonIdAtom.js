import { atomFamily } from "recoil";

const pokemonIdAtom = atomFamily({
  key: "pokemonIdAtom",
  default: (id) => id,
});

export default pokemonIdAtom;
