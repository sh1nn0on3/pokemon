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

  // call API pokemon
  useEffect(() => {
    const getPokemon = async () => {
      await axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=1")
        .then((res) => {
          // console.log("🚀 ~ file: App.tsx:12 ~ Api ~ res:", res.data.results);
          console.log(" successful !!!");
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
  }, []);

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
        <PokemonColection value={pokemons} />
      </div>
    </div>
  );
};

export default App;
