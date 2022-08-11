import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"
import Meta from "../../components/Meta"
import PageHeader from "../../components/tailwind/PageHeader"
import PokemonGrid from "../../components/tailwind/PokemonsGrid"
import PresentationText from "../../components/tailwind/PresentationText"
import { ISR_BULLETS, ISR_EXPLAINATION, ISR_METHOD } from "../../constants/doc"
import { NEXT_DOC_ISR } from "../../constants/routes"

interface Props {
  pokemons: Pokemon[]
  date: string
}

const ISR = ({ pokemons, date }: Props) => {
  return (
    <div className="container mx-auto p-3">
      <Meta title="Pokedex with Tailwind and ISR" />
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
      <p>Last build: {date}</p>
      <PokemonGrid pokemons={pokemons} />
    </div>
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
