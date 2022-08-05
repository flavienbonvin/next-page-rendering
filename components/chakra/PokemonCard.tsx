import { Pokemon } from "@prisma/client"
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import PokemonStat from "./PokemonStat"

interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  const type2 = pokemon.type2 && pokemon.type2?.length > 0 ? pokemon.type2 : "-"
  const number =
    pokemon.number < 10
      ? `00${pokemon.number}`
      : pokemon.number < 100
      ? `0${pokemon.number}`
      : pokemon.number

  return (
    <Box bg="blackAlpha.50" p={4} borderRadius="md">
      <Box>
        <Heading size="md" color="blackAlpha.800" display="inline" mr={2}>
          {pokemon.name}
        </Heading>
        <Text fontSize="xs" display="inline" as="pre">
          No. {number}
        </Text>
      </Box>
      <Text color="blackAlpha.600" mb={2}>
        {pokemon.type1}
      </Text>
      <Divider color="black" />
      <Flex w="fulls">
        <Image
          src={pokemon.sprite}
          height={128}
          width={128}
          alt={pokemon.name}
        />
      </Flex>
      <Flex gap={4}>
        <Flex
          lineHeight={1}
          flexDirection="column"
          w="40%"
          p={2}
          borderColor="gray.800"
          borderWidth="6px"
          borderStyle="double">
          <PokemonStat title="Attack" value={pokemon.attack} />
          <PokemonStat title="Defense" value={pokemon.defense} />
          <PokemonStat title="Speed" value={pokemon.speed} />
        </Flex>
        <Flex
          lineHeight={1}
          flexDirection="column"
          w="40%"
          p={2}
          borderRight="2px"
          borderBottom="2px"
          borderColor="gray.800"
          borderStyle="solid">
          <PokemonStat title="Type 1" value={pokemon.type1} />
          <PokemonStat title="Type 2" value={type2} />
          <PokemonStat title="Spe Att" value={pokemon.spAtt} />
          <PokemonStat title="Spe Def" value={pokemon.spDef} />
        </Flex>
      </Flex>
    </Box>
  )
}

export default PokemonCard
