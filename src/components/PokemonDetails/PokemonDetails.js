import React from "react";
import "./PokemonDetails.scss";
import { capitalize } from "../helpers";

const PokemonDetails = ({ singlePokemon: { id, name, types, stats, weight, moves } }) => {
  return (
    <div className="details">
      <div className="details__img-container">
        <img
          className="details__img"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt=""
        />
      </div>
      <div className="details__list-container">
        <h2 className="details__name"><span>{name}</span> <span>#{('00' + id).slice(-3)}</span></h2>
        <ul className="details__list">
          <li className="details__list-item">
            <span className="details__term">Type</span>
  <span className='details__term-value'>{capitalize(types[0].type.name)} </span>
          </li>
          <li className="details__list-item">
            <span className="details__term">Attack</span>
            <span className='details__term-value'>{stats[4].base_stat}</span>
          </li>
          <li className="details__list-item">
            <span className="details__term">Defense</span>
            <span className='details__term-value'>{stats[3].base_stat}</span>
          </li>
          <li className="details__list-item">
            <span className="details__term">HP</span>
            <span className='details__term-value'>{stats[5].base_stat}</span>
          </li>
          <li className="details__list-item">
            <span className="details__term">SP Attack</span>
            <span className='details__term-value'>{stats[2].base_stat}</span>
          </li>
          <li className="details__list-item">
            <span className="details__term">SP Defense</span>
            <span className='details__term-value'>{stats[1].base_stat}</span>
          </li>
          <li className="details__list-item">
            <span className="details__term">Speed</span>
            <span className='details__term-value'>{stats[0].base_stat}</span>
          </li>
          <li className="details__list-item">
            <span className="details__term">Weihgt</span>
            <span className='details__term-value'>{weight}</span>
          </li>
          <li className="details__list-item">
            <span className="details__term">Total moves</span>
            <span className='details__term-value'>{moves.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonDetails;
