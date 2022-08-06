import { Pokemon } from "@prisma/client"
import PokemonCard from "./PokemonsCard"

interface Props {
  pokemons: Pokemon[]
}

const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  )
}

export default PokemonGrid
