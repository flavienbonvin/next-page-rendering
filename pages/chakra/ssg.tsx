import { ChakraProvider, Container, Heading } from "@chakra-ui/react"
import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"
import PokemonGrid from "../../components/chakra/PokemonsGrid"
import Meta from "../../components/Meta"

interface Props {
  pokemons: Pokemon[]
}

const SSG = ({ pokemons }: Props) => {
  return (
    <>
      <Meta title="Pokedex with Chara and SSG" />
      <ChakraProvider>
        <Page pokemons={pokemons} />
      </ChakraProvider>
    </>
  )
}

const Page = ({ pokemons }: Props) => {
  return (
    <Container pt={3} maxW="container.xl">
      <Heading pb={8}>Pokemon list</Heading>
      <PokemonGrid pokemons={pokemons} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = new PrismaClient()

  const pokemons = await client.pokemon.findMany()

  return {
    props: { pokemons },
  }
}

export default SSG
