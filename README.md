# Pokémon Finder 🕵️‍♂️

**Pokémon Finder** is a web application built with **React** ⚛️ and **Vite** ⚡ that allows users to search for detailed information about Pokémon using the [PokeAPI](https://pokeapi.co/).  
The app provides details such as base stats, types, abilities, descriptions, and more. It also includes a button to play the Pokémon's cry.
This proyect was made it for the **"Desafío BLOOM"** challenge.

## 🖼️ Application Example

![Pokémon Finder Example](/public/example.png)

---

## 🚀 Features

- **Search Pokémon by name**: Enter a Pokémon's name to fetch its details.
- **Base stats and types**: View the Pokémon's base stats and elemental types.
- **English descriptions**: Fetches the Pokémon's description from the latest game.
- **Alternate sprites**: Toggle between the normal and shiny sprite (secret!).
- **Pokémon cry**: Play the Pokémon's cry with a sound button.

---

## 📋 Requirements

### Project Dependencies:
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Docker** (optional, to run with containers)

---

## ⚙️ Installation and Usage

### **Run with npm**

1. Clone the repository:
   ```bash
   git clone https://github.com/benjaminMancilla/pokemon-finder.git
   cd pokemon-finder
   ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application in development mode:
    ```bash
    npm run dev
    ```

4. Open your browser and go to:
    ```bash
    http://localhost:5173
    ```

### **Run with Docker 🐳** ###

1. Ensure Docker is installed and running.

2. Build the Docker image:
    ```bash
    docker build -t pokemon-finder .
    ```

3. Run the container, mapping port 5173:
    ```bash
    docker run -p 5173:5173 pokemon-finder
    ```

4. Open your browser and go to:
    ```bash
    http://localhost:5173
    ```

## 🛠️ Project Structure
    ```bash
    /pokemon-finder
    ├── src/
    │   ├── main.jsx            # Entry point for the app
    │   ├── App.jsx             # Main React component
    │   ├── components/         # Reusable components
    │   │   ├── Pokedex.jsx 
    │   │   ├── SearchBar.jsx
    │   │   ├── SoundButton.jsx
    │   ├── styles/             # CSS files
    ├── package.json            # Project dependencies and scripts
    ├── Dockerfile              # Docker configuration
    ├── .dockerignore           # Files ignored by Docker
    └── index.html              # Main HTML file
    ```

## 🧪 Example Pokémon to Test

Here are some sample Pokémon names you can search for:

- **Pikachu**
- **Charizard**
- **Bulbasaur**
- **Eevee**
- **Gyarados**