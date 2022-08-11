import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetServerSideProps } from "next/types"
import PokemonGrid from "../../components/tailwind/PokemonsGrid"
import Meta from "../../components/Meta"
import PresentationText from "../../components/tailwind/PresentationText"
import { SSR_BULLETS, SSR_EXPLAINATION, SSR_METHOD } from "../../constants/doc"
import PageHeader from "../../components/tailwind/PageHeader"
import { NEXT_DOC_SSR } from "../../constants/routes"

interface Props {
  pokemons: Pokemon[]
}

const SSR = ({ pokemons }: Props) => {
  return (
    <div className="container mx-auto p-3">
      <Meta title="Pokedex with Tailwind and SSR" />
      <PageHeader
        method={SSR_METHOD}
        linkText="NextJS SSR doc"
        docLink={NEXT_DOC_SSR}
      />
      <PresentationText
        pageStrategy="SSR"
        bulletPoints={SSR_BULLETS}
        explainationText={SSR_EXPLAINATION}
      />
      <PokemonGrid pokemons={pokemons} />
    </div>
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
