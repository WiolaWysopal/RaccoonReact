import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { pokemonIdAtom } from "./Atom";
import { fetchPokemonDetailsSelector } from "./selectors";

const PokemonDetails = () => {
  const { id } = useParams();
  const [currentId, setCurrentId] = useRecoilState(pokemonIdAtom(parseInt(id)));
  const pokemonDetails = useRecoilValue(fetchPokemonDetailsSelector(currentId));

  useEffect(() => {
    setCurrentId(parseInt(id));
  }, [id, setCurrentId]);

  const officialArtwork = "official-artwork";
  const frontDefault = "front_default";
  const image = pokemonDetails.sprites.other[officialArtwork][frontDefault];

  return (
    <div>
      <div>
        <img src={image} alt={pokemonDetails.name} className="w-40 h-40" />
      </div>
      <div>
        <h3>{pokemonDetails.name.toUpperCase()}</h3>
        <ul>
          <li>Height: {pokemonDetails.height}</li>
          <li>Weight: {pokemonDetails.weight}</li>
        </ul>
        <ul>
          {pokemonDetails.stats.map(({ base_stat: baseState, stat }, index) => {
            return (
              <li key={index}>
                <span> {stat.name} </span>:<span> {baseState} </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
