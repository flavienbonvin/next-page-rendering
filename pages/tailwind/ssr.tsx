import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetServerSideProps } from "next/types"
import PokemonGrid from "../../components/tailwind/PokemonsGrid"
import Meta from "../../components/Meta"

interface Props {
  pokemons: Pokemon[]
}

const SSR = ({ pokemons }: Props) => {
  return (
    <div className="container mx-auto p-3">
      <Meta title="Pokedex with Tailwind and SSR" />
      <h1 className="mb-10 text-3xl font-bold">Pokemon list</h1>
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
