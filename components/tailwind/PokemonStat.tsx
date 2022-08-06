interface Props {
  title: string
  value: string | number
}

const PokemonStat = ({ title, value }: Props) => {
  return (
    <>
      <p className="text-sm leading-none text-neutral-700">{title}</p>
      {typeof value === "number" ? (
        <pre className="text-end text-sm leading-none text-neutral-700">
          {value}
        </pre>
      ) : (
        <p className="text-end text-sm leading-none text-neutral-700">
          {value}
        </p>
      )}
    </>
  )
}

export default PokemonStat
