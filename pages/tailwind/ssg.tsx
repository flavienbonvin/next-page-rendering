import { Pokemon, PrismaClient } from "@prisma/client";
import type { GetStaticProps } from "next/types";

interface Props {
  pokemons: Pokemon[];
}

const SSG = ({ pokemons }: Props) => {
  return (
    <>
      <p>SSG</p>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const client = new PrismaClient();

  const pokemons = await client.pokemon.findMany();

  return {
    props: { pokemons },
  };
};

export default SSG;
