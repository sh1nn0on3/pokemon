import { Pokemon } from "../interface";
import PokemonList from "./PokemonList";
import "./pokemon.css"

interface Props {
  value: Pokemon[];
}

const PokemonColection: React.FC<Props> = (props) => {
  const { value } = props;

  return (
    <div>
      <section className="collection-container">
        {value.map((pokemon) => {
          return (
            <div className="">
              <PokemonList
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default PokemonColection;
