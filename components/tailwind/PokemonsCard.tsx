import { Pokemon } from "@prisma/client"
import Image from "next/image"
import PokemonStat from "./PokemonStat"

interface Props {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  const type2 = pokemon.type2 && pokemon.type2?.length > 0 ? pokemon.type2 : "-"
  const number =
    pokemon.number < 10
      ? `00${pokemon.number}`
      : pokemon.number < 100
      ? `0${pokemon.number}`
      : pokemon.number

  return (
    <div className="rounded-lg bg-neutral-100 p-4">
      <div>
        <h2 className="mr-2 inline-block text-xl font-semibold">
          {pokemon.name}
        </h2>
        <pre className="inline-block text-xs text-neutral-600">N° {number}</pre>
      </div>
      <div className="mt-4 w-full border border-neutral-300" />
      <Image src={pokemon.sprite} height={128} width={128} alt={pokemon.name} />
      <div className="flex gap-4">
        <div className="w-[40%] border-8 border-double border-neutral-700 p-2">
          <PokemonStat title="Attack" value={pokemon.attack} />
          <PokemonStat title="Defense" value={pokemon.defense} />
          <PokemonStat title="Speed" value={pokemon.speed} />
        </div>
        <div className="w-[40%] border-r-2 border-b-2 border-neutral-700 p-2">
          <PokemonStat title="Type 1" value={pokemon.type1} />
          <PokemonStat title="Type 2" value={type2} />
          <PokemonStat title="Spe Att" value={pokemon.spAtt} />
          <PokemonStat title="Spe Def" value={pokemon.spDef} />
        </div>
      </div>
    </div>
  )
}

export default PokemonCard
