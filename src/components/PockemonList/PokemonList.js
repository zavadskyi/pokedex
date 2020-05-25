import React from "react";
import "./PokemonList.scss";
import PokemonItem from "../PokemonItem/PokemonItem";
import Button from "../Button/Button";

const PokemonList = ({ pokemon, onShowMore, onShowSinglePokemon }) => {
  console.log(pokemon);

  return (
    <div className="list">
      {pokemon.length ? (
        pokemon.map((p) => (
          <PokemonItem
            onShowSinglePokemon={onShowSinglePokemon}
            key={p.id}
            pokemon={p}
          />
        ))
      ) : (
        <h3 className="list__not-found">
          Nothing found try a different type or click "Load More"
        </h3>
      )}

      <Button onClick={onShowMore} text="Load More" width="100%" />
    </div>
  );
};

export default PokemonList;
