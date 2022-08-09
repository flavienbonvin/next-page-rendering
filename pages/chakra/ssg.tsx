import { ChakraProvider, Container } from "@chakra-ui/react"
import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"
import PageHeader from "../../components/chakra/PageHeader"
import PokemonGrid from "../../components/chakra/PokemonsGrid"
import PresentationText from "../../components/chakra/PresentationText"
import Meta from "../../components/Meta"
import { SSG_BULLETS, SSG_EXPLAINATION, SSG_METHOD } from "../../constants/doc"
import { NEXT_DOC_SSG } from "../../constants/routes"

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
      <PageHeader
        linkText="NextJS SSG doc"
        docLink={NEXT_DOC_SSG}
        method={SSG_METHOD}
      />
      <PresentationText
        pageStrategy="SSG"
        bulletPoints={SSG_BULLETS}
        explainationText={SSG_EXPLAINATION}
      />
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
