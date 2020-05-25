import React from "react";
import "./PokemonItem.scss";
import Badge from "../Badge/Badge";

const PokemonItem = ({ pokemon, onShowSinglePokemon }) => { 
  return (
    <div className="list-item" onClick={() => onShowSinglePokemon(pokemon.id)}>
      <div className="list-item__content">
        <img
          className="list-item__img"
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt="Pokemon"
        />
        <p className="list-item__name">{pokemon.name}</p>
       <Badge types={pokemon.types} />
      </div>
    </div>
  );
};

export default PokemonItem;
