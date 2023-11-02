import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";
import "./index.css";
import "./App.css";
import Pagination from "./components/Pagination";
import Search from "./components/Search";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = async (url) => {

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
        setLoading(false);
      })
      .catch((error) => console.log(error));
      
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };

  const onNext = () => {
    fetchCharacters(info.next);
  };

  const filterCharacters = characters.filter((character) => character.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar />
      <Search search={search} setSearch={setSearch} />
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      {loading ? ( // Usar el operador ternario para mostrar "Cargando" o los personajes
        <div className="container">Cargando...</div>
      ) : (
        <div className="container">
          <Characters search={search} characters={filterCharacters} />
        </div>
      )}
      <Pagination
        prev={info.prev}
        next={info.next}
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </>
  );
}

export default App;
