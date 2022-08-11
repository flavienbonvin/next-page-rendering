import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"
import PokemonGrid from "../../components/tailwind/PokemonsGrid"
import Meta from "../../components/Meta"
import PresentationText from "../../components/tailwind/PresentationText"
import { SSG_BULLETS, SSG_EXPLAINATION, SSG_METHOD } from "../../constants/doc"
import PageHeader from "../../components/chakra/PageHeader"
import { NEXT_DOC_SSG } from "../../constants/routes"

interface Props {
  pokemons: Pokemon[]
}

const SSG = ({ pokemons }: Props) => {
  return (
    <div className="container mx-auto p-3">
      <Meta title="Pokedex with Tailwind and ISR" />
      <PageHeader
        method={SSG_METHOD}
        linkText="NextJS SSG doc"
        docLink={NEXT_DOC_SSG}
      />
      <PresentationText
        pageStrategy="SSG"
        bulletPoints={SSG_BULLETS}
        explainationText={SSG_EXPLAINATION}
      />
      <PokemonGrid pokemons={pokemons} />
    </div>
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
