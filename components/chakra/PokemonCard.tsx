import { Pokemon } from "@prisma/client"
import { Box, Text } from "@chakra-ui/react"

interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Box bg="gray.50" p={4} borderRadius="md">
      <Text>{pokemon.name}</Text>
    </Box>
  )
}

export default PokemonCard
