import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { getData, _baseApiURL } from "../../service/service";
import "./App.scss";
import PokemonList from "../PockemonList/PokemonList";
import PokemonDetails from "../PokemonDetails/PokemonDetails";
import Spinner from "../Spinner/Spinner";
import Filter from "../Filter/Filter";

const App = () => {
  const [pokenonData, setPokemonData] = useState([]);
  const [filterPokenonData, setFilterPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [error, setError] = useState(false);
  const [singlePokemon, setSinglePokemon] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await getData(`${_baseApiURL}/pokemon/?limit=12`);
        setNextUrl(response.next);
        await loadPokemon(response.results);
        setLoading(false);
      } catch (err) {
        if (err) {
          setError(true);
        }
      }
    }
    fetchData();
  }, []);

  const loadPokemon = async (data) => {
    try {
      let _pokemonData = await Promise.all(
        data.map(async (pokemon) => {
          let pokemonRecord = await getData(pokemon.url);
          return pokemonRecord;
        })
      );
      setPokemonData(_pokemonData);
    } catch (err) {
      if (err) {
        setError(true);
      }
    }
  };

  const onShowMore = async () => {
    try {
      setLoading(true);
      let data = await getData(nextUrl);
      await loadPokemon(data.results);
      setNextUrl(data.next);
      setLoading(false);
      setIsFiltered(false);
    } catch (err) {
      if (err) {
        setError(true);
      }
    }
  };

  const onShowSinglePokemon = async (id) => {
    const singlePokemon = await getData(`${_baseApiURL}/pokemon/${id}`);

    setSinglePokemon(singlePokemon);
    setIsSelected(true);
  };

  const showPokemonByType = (type) => {
    setIsFiltered(true);
    const filteredData = pokenonData.filter((pokemon) =>
      pokemon.types.some((el) => el.type.name === type)
    );
    setFilterPokemonData(filteredData);
  };

  return (
    <div className="App">
      <Header text="Pokedex" />

      {
        !error ?(

<>
      <Filter showPokemonByType={showPokemonByType} />
      <main className="App__main">
        {(
          loading ? (
            <Spinner />
          ) : (
            <PokemonList
              onShowSinglePokemon={onShowSinglePokemon}
              onShowMore={onShowMore}
              pokemon={isFiltered ? filterPokenonData : pokenonData}
            />
          )
        )}

        {(
          isSelected ? (
            <PokemonDetails singlePokemon={singlePokemon} />
          ) : (
            <h2>Catch pokemon!</h2>
          )
        )}
      </main>
      </>
        ) : <h2 className="App__error">Error!</h2>
      }
      
    </div>
  );
};

export default App;
