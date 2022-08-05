import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetServerSideProps } from "next/types"
import Meta from "../../components/Meta"

interface Props {
  pokemons: Pokemon[]
}

const SSR = ({ pokemons }: Props) => {
  return (
    <>
      <Meta title="Pokedex with Tailwind and SSR" />
      <p>SSR</p>
    </>
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
