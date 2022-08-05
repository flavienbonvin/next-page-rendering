import { Pokemon, PrismaClient } from "@prisma/client"
import type { GetServerSideProps } from "next/types"

interface Props {
  pokemons: Pokemon[]
}

const ISR = ({ pokemons }: Props) => {
  return (
    <>
      <p>SSG</p>
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

export default ISR
