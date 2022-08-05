import { ChakraProvider, Container, Heading, Text } from "@chakra-ui/react"
import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"
import PokemonGrid from "../../components/chakra/PokemonsGrid"
import Meta from "../../components/Meta"

interface Props {
  pokemons: Pokemon[]
  date: string
}

const ISR = ({ pokemons, date }: Props) => {
  return (
    <>
      <Meta title="Pokedex with Chara and ISR" />
      <ChakraProvider>
        <Page pokemons={pokemons} date={date} />
      </ChakraProvider>
    </>
  )
}

const Page = ({ pokemons, date }: Props) => {
  return (
    <Container pt={3} maxW="container.xl">
      <Heading pb={8}>Pokemon list</Heading>
      <Text>Last build: {date}</Text>
      <PokemonGrid pokemons={pokemons} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new PrismaClient()

  const pokemons = await client.pokemon.findMany()

  return {
    props: { pokemons, date: new Date().toLocaleString() },
    revalidate: 10,
  }
}

export default ISR
