import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"
import Meta from "../../components/Meta"
import PokemonGrid from "../../components/tailwind/PokemonsGrid"

interface Props {
  pokemons: Pokemon[]
  date: string
}

const ISR = ({ pokemons, date }: Props) => {
  return (
    <div className="container mx-auto p-3">
      <Meta title="Pokedex with Tailwind and ISR" />
      <h1 className="mb-10 text-3xl font-bold">Pokemon list</h1>
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
