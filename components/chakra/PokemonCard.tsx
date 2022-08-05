import { Pokemon } from "@prisma/client"
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"

interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <Box bg="blackAlpha.50" p={4} borderRadius="md">
      <Heading size="md" color="blackAlpha.800">
        {pokemon.name}
      </Heading>
      <Text color="blackAlpha.600" mb={2}>
        {pokemon.type1}
      </Text>
      <Divider color="black" />
      <Flex w="fulls" justifyContent="center">
        <Image
          src={pokemon.sprite}
          height={128}
          width={128}
          alt={pokemon.name}
        />
      </Flex>
    </Box>
  )
}

export default PokemonCard
