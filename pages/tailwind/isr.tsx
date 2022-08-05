import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetStaticProps } from "next/types"

interface Props {
  pokemons: Pokemon[]
  date: string
}

const ISR = ({ pokemons, date }: Props) => {
  return (
    <>
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
