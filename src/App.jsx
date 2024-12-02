import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import Pokedex from "./components/Pokedex.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';


// **Pokémon Finder using the "PokeAPI" v2**
// This main component (App) manages the logic for searching for a Pokémon by name
// and displays the information in a card called "Pokedex".
// The application includes:
// 1. A search bar.
// 2. An information card (Pokedex).
// 3. An additional button to play the Pokémon cry (extra).

function App() {

  // **State management**
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState("");

  /**
   * Helper function to fetch the Pokémon's Pokédex description.
   * Calls the `/pokemon-species/{id}` endpoint to retrieve the flavor text in English.
   * @param {number} id - Pokémon ID.
   * @returns {string} - Pokémon description or an error message.
   */
  const fetchPokemonDescription = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const flavorTextEntry = response.data.flavor_text_entries.find(
        (entry) => entry.language.name === "en"
      );
      return flavorTextEntry
        ? flavorTextEntry.flavor_text.replace(/\n/g, " ")
        : "No description available.";
    } 
    
    catch (err) {
      console.error("Error fetching Pokémon description:", err);
      return "No description available.";
    }
  };
  
  /**
   * Helper function to fetch the Pokémon's category.
   * Calls the `/pokemon-species/{id}` endpoint and filters the genus in English.
   * @param {number} id - Pokémon ID.
   * @returns {string} - Pokémon category or an error message.
   */
  const fetchPokemonSpecies = async (id) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const genera = response.data.genera.find((genus) => genus.language.name === "en");
      return genera ? genera.genus : "No category available.";
    } 
    
    catch (err) {
      console.error("Error fetching Pokémon species:", err);
      return "No category available.";
    }
  };
  
  

  /**
   * Main function to fetch a Pokémon by name.
   * Performs three steps:
   * 1. Calls the `/pokemon/{name}` endpoint to retrieve general data.
   * 2. Fetches the Pokémon category from `/pokemon-species/{id}`.
   * 3. Fetches the Pokémon description from `/pokemon-species/{id}`.
   * @param {string} name - Pokémon name.
   */
  const fetchPokemon = async (name) => {
    try {
      setError(""); // Reset error message
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      const pokemonData = response.data;
  
      // Fetch category and description
      const category = await fetchPokemonSpecies(pokemonData.id);
      const description = await fetchPokemonDescription(pokemonData.id);
  
      // Update state with the complete data
      setPokemon({
        ...pokemonData,
        category,
        description,
      });
    } 
    
    catch (err) {
      console.error("Error fetching Pokémon:", err);
      setPokemon(null);
      setError("Pokemon not found");
    }
  };
  
  
   // **Main render**
  // Renders the search bar and either the Pokedex card or an error message.
  return (
    <section className="App">
      <div className="bg-dark text-light min-vh-100">
        <div className="fixed-top py-3 shadow">
          <h1 className="text-center mb-3">Pokémon Finder</h1>
          <div className="container">
            <SearchBar onSearch={fetchPokemon} />
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center vh-100">
          {error && <div className="alert alert-danger">{error}</div>}
          {pokemon && <Pokedex pokemon={pokemon} />}
        </div>
      </div>
    </section>


  );
}

export default App;


