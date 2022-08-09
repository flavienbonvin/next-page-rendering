import { ChakraProvider, Container } from "@chakra-ui/react"
import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetServerSideProps } from "next/types"
import PageHeader from "../../components/chakra/PageHeader"
import PokemonGrid from "../../components/chakra/PokemonsGrid"
import PresentationText from "../../components/chakra/PresentationText"
import Meta from "../../components/Meta"
import { SSR_BULLETS, SSR_EXPLAINATION, SSR_METHOD } from "../../constants/doc"
import { NEXT_DOC_SSR } from "../../constants/routes"

interface Props {
  pokemons: Pokemon[]
}

const SSR = ({ pokemons }: Props) => {
  return (
    <>
      <Meta title="Pokedex with Chara and SSR" />
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
        linkText="NextJS SSR doc"
        docLink={NEXT_DOC_SSR}
        method={SSR_METHOD}
      />
      <PresentationText
        pageStrategy="SSR"
        bulletPoints={SSR_BULLETS}
        explainationText={SSR_EXPLAINATION}
      />
      <PokemonGrid pokemons={pokemons} />
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = new PrismaClient()

  const pokemons = await client.pokemon.findMany()

  return {
    props: { pokemons },
  }
}

export default SSR
