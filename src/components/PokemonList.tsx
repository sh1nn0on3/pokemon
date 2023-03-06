import "./pokemon.css";

interface Pokemon {
  name: string;
  id: number;
  image: string;
}

const PokemonList: React.FC<Pokemon> = (props) => {
  const { name, id, image } = props;

  return (
    <div>
      <section className="pokemon-list-container">
        <p className="pokemon-name">{name} </p>
        <img src={image} alt="#" />
      </section>
    </div>
  );
};

export default PokemonList;
