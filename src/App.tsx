import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokemonColection from "./components/PokemonColection";
import { Pokemon, Pokemons } from "./interface";

// interface Pokemons {
//   name: string;
//   url: string;
// }

// interface Pokemon {
//   id: number;
//   name: string;
//   sprites: {
//     front_default: string;
//   };
// }

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("1");

  // call API pokemon
  useEffect(() => {
    const getPokemon = async () => {
      await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${nextUrl}`)
        .then((res) => {
          // console.log("🚀 ~ file: App.tsx:12 ~ Api ~ res:", res.data.results);
          console.log(" successful !!!");

          // next url
          // setNextUrl(res.data.next);

          // get data from API -- name , uid , image , ...
          res.data.results.forEach(async (pokemon: Pokemons) => {
            const poke = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            // console.log("🚀 ~ file: App.tsx:25 ~ res.data.results.forEach ~ poke:", poke.data)
            setPokemons((prop) => [...prop, poke.data]);
          });
        })
        .catch((err) => {
          console.log("🚀 ~ file: App.tsx:18 ~ getPokemon ~ err:", err);
        });
    };
    // cleanup function
    return () => {
      getPokemon();
    };
  }, [nextUrl]);

  const nextPage = () => {
    setNextUrl((nextUrl) => nextUrl + 1);
  };

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonColection value={pokemons} />
      </div>
      <div className="btn">
        <button onClick={nextPage}>Load more !!!</button>
      </div>
    </div>
  );
};

export default App;