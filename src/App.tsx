import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState<string>("1");

  useEffect(() => {
    const getPokemon = async () => {
      const poke = await axios
        .get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${nextUrl}`)
        .then((res) => {
          console.log("sucessful !!!");
          // console.log("🚀 ~ file: App.tsx:14 ~ .then ~ res:", res.data.results);

          res.data.results.forEach(async (pokemon: any) => {
            const poke = await axios.get(``).then().catch();
          });
        })
        .catch();
    };

    return () => {
      getPokemon();
    };
  }, [nextUrl]);

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">Pokemon</header>
      </div>
    </div>
  );
};

export default App;
