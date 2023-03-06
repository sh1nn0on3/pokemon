import { Pokemon } from "../interface";

interface Props {
    pokemons: Pokemon[];
}

const PokemonColection:React.FC<Props> = (props) => {
  const { pokemons } = props;

  return <div>Pokemon Colection</div>;
};

export default PokemonColection;
