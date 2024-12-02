import React from "react";

/**
 * SoundButton Component
 * This component renders a button with a speaker icon.
 * When clicked, it plays the Pokemon's cry using the provided `cryUrl`.
 *
 * @param {string} cryUrl - The URL of the audio file containing the Pokémon's cry.
 */
function SoundButton({ cryUrl }) {
  /**
   * Handles the playback of the Pokemon cry.
   * Creates a new `Audio` instance with the `cryUrl` and plays it.
   */
  const playCry = () => {
    const audio = new Audio(cryUrl);
    audio.play();
  };

  return (
    <button
      className="sound-button btn btn-primary"
      onClick={playCry}
      aria-label="Play Pokémon cry"
    >
      🔊
    </button>
  );
}

export default SoundButton;

