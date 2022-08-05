import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

import pokemons from "../../public/pokemons.json";

const prisma = new PrismaClient();

interface Pokemon {
  name: string;
  type1: string;
  type2?: string;
  hp: number;
  attack: number;
  defense: number;
  speed: number;
}

// noinspection JSUnusedGlobalSymbols
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: Pokemon[] = [];

  pokemons.forEach((pokemon: any) => {
    if (pokemon.Generation !== 1) return;
    const { Name, Type1, Type2, HP, Attack, Defense, Speed } = pokemon;
    data.push({
      name: Name,
      type1: Type1,
      type2: Type2,
      hp: HP,
      attack: Attack,
      defense: Defense,
      speed: Speed,
    });
  });

  await prisma.pokemon.createMany({ data: data });

  res.status(200).send("hello");
}
