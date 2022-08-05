import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"
import Meta from "../../components/Meta"

interface Props {
  pokemons: Pokemon[]
  date: string
}

const ISR = ({ pokemons, date }: Props) => {
  return (
    <>
      <Meta title="Pokedex with Tailwind and ISR" />
      <p>ISR</p>
      <p>Last build: {date}</p>
    </>
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
