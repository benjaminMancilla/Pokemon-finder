import React, { useState, useEffect } from "react";
import SoundButton from "./SoundButton";
import '../styles/types.css';

/* 
  Pokedex Component
  This component receives a `pokemon` object and displays its information.
  The `pokemon` object corresponds to a JSON response from the API containing
  all relevant data about the Pokemon.
  Documentation available at: https://pokeapi.co/docs/v2#pokemon 
*/
function Pokedex({ pokemon }) {

  const [shiny, setShiny] = useState(false);

  // Resets the shiny state whenever a new Pokemon is loaded
  useEffect(() => {
    setShiny(false);
  }, [pokemon]);

  /**
   * Capitalizes the first letter of a given string.
   * @param {string} str - The string to be capitalized.
   * @returns {string} - The capitalized string.
   */
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // Mapping of stat names to their abbreviations
  const typeColors = {
    'hp': "HP",
    'attack': "ATK",
    'defense': "DEF",
    'special-attack': "SPA",
    'special-defense': "SPD",
    'speed': "SPE",
  };


  // Formatting Pokemon specific data
  const pokedexNumber = pokemon.id.toString().padStart(4, "0");
  const sprite = shiny ? pokemon.sprites.other["official-artwork"].front_shiny 
  : pokemon.sprites.other["official-artwork"].front_default;
  const weightInKilograms = pokemon.weight / 10;
  const heightInMeters = pokemon.height / 10;

  return (
    <div className="card pokemon-card mx-auto shadow">
      {/* Header */}
      <div className="card-header text-white bg-danger d-flex justify-content-between align-items-center">
        <h2 className="pokemon-name m-0">{capitalizeFirstLetter(pokemon.name)}</h2>
        <span className="pokemon-id">#{pokedexNumber}</span>
      </div>

      {/* Body */}
      <div className="card-body">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-4 text-center">
            {/* Sprite */}
            <button className= "btn bg-transparent border-0" 
              onClick={() => setShiny(!shiny)}
              >
              <img src={sprite} alt={pokemon.name} className="img-fluid mb-3" />
            </button>
            
            {/* Sound button */}
            <SoundButton cryUrl={pokemon.cries.latest} />
            <div className="pokemon-stats bg-light p-3 rounded">
              <h5>Base Stats</h5>
              <ul className="list-unstyled">
                {pokemon.stats.map((stat) => (
                  <li key={stat.stat.name}>
                    <strong>{typeColors[stat.stat.name]}: {stat.base_stat}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-md-8">
            {/* Description */}
            <div className="pokemon-description bg-light p-3 rounded mb-3">
              <p>
                {pokemon.description}
              </p>
            </div>

            {/* Details */}
            <div className="pokemon-details bg-light p-3 rounded mb-3">
              <h5>Details</h5>
              <ul className="list-unstyled">
                <li>Height: {heightInMeters} m</li>
                <li>Weight: {weightInKilograms} kg</li>
                <li>Category: {pokemon.category}</li>
                <h5>Abilities</h5>
                <ul className="list-unstyled">
                  {pokemon.abilities.map((abilityObj, index) => (
                    <li key={index}>
                      {capitalizeFirstLetter(abilityObj.ability.name.replace("-", " "))}{" "}
                      {abilityObj.is_hidden && (
                        <span className="text-muted">(Hidden Ability)</span>
                      )}
                    </li>
                  ))}
                </ul>
              </ul>
            </div>

            {/* Types */}
            <div className="pokemon-types text-center bg-light p-3 rounded">
              <h5>Type</h5>
              <div className="d-flex justify-content-center gap-2">
                {pokemon.types.map((typeObj, index) => (
                  <div key={index} className={`badge type-${typeObj.type.name} me-2`}>
                    {capitalizeFirstLetter(typeObj.type.name)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



  );
}

export default Pokedex;