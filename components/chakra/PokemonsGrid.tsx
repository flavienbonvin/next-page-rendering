import { SimpleGrid } from "@chakra-ui/react"
import { Pokemon } from "@prisma/client"
import PokemonCard from "./PokemonCard"

interface Props {
  pokemons: Pokemon[]
}

const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <SimpleGrid minChildWidth="300px" spacing={10} mb={20}>
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </SimpleGrid>
  )
}

export default PokemonGrid
