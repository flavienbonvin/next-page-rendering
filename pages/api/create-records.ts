import { Pokemon, PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import pokemons from "../../public/pokemons.json";
const prisma = new PrismaClient();

type PokemonCreate = Omit<Pokemon, "id">;
type JsonPokemon = PokemonCreate & {
  generation: number;
};

// noinspection JSUnusedGlobalSymbols
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: PokemonCreate[] = [];

  pokemons.forEach((pokemon: any) => {
    if (pokemon.generation !== 1) return;
    const {
      name,
      type1,
      type2,
      hp,
      attack,
      defense,
      speed,
      spAtt,
      spDef,
      total,
    } = pokemon as JsonPokemon;

    data.push({
      name,
      type1,
      type2: type2 ?? null,
      hp,
      attack,
      defense,
      speed,
      spAtt,
      spDef,
      total,
    });
  });

  await prisma.pokemon.createMany({ data: data });

  res.status(200).send("sucessfully finished");
}
