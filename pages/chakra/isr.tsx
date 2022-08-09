import { ChakraProvider, Container } from "@chakra-ui/react"
import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"
import PageHeader from "../../components/chakra/PageHeader"
import PokemonGrid from "../../components/chakra/PokemonsGrid"
import PresentationText from "../../components/chakra/PresentationText"
import Meta from "../../components/Meta"
import { ISR_BULLETS, ISR_EXPLAINATION, ISR_METHOD } from "../../constants/doc"
import { NEXT_DOC_ISR } from "../../constants/routes"

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
      <PageHeader
        date={date}
        method={ISR_METHOD}
        linkText="NextJS ISR doc"
        docLink={NEXT_DOC_ISR}
      />
      <PresentationText
        pageStrategy="ISR"
        bulletPoints={ISR_BULLETS}
        explainationText={ISR_EXPLAINATION}
      />
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
