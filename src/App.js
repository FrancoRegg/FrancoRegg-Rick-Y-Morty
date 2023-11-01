import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import "./index.css"
function App() {
  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character";

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Navbar brand="rick and morty" />

      <div className="container">
        <Characters characters={characters}/>
      </div>
    </>
  );
}

export default App;
