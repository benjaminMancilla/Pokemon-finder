import React, { useState } from "react";

/* Generic SearchBar Component
   This component renders a search input and a button. It is designed to be
   reusable and receives a search function through props to handle the search action. */

function SearchBar({ onSearch }) {
  // State to track the current value of the input field
  const [input, setInput] = useState("");

  /**
   * Handles input changes in the search bar.
   * Retrieves the value entered in the input field and updates the `input` state.
   * @param {object} e - The event triggered by the input change.
   */
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  /**
   * Handles the search action.
   * Trims extra spaces from the input value and calls the `onSearch` function
   * (passed as a prop) if the input is not empty.
   */
  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input); // Calls the search function passed as a prop
    }
  };

  return (
    <div className="input-group mb-3 search-bar">
      <input
        type="text"
        className="form-control custom-search-input"
        placeholder="Write the Pokémon name"
        value={input}
        onChange={handleInputChange}
      />
      <button className="btn btn-primary"
      onClick={handleSearch}>
        Search</button>
    </div>



  );
}

export default SearchBar;