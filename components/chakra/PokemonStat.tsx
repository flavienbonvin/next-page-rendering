import { Text } from "@chakra-ui/react"

interface Props {
  title: string
  value: string | number
}

const PokemonStat = ({ title, value }: Props) => {
  const display = typeof value === "number" ? "pre" : "p"
  return (
    <>
      <Text fontSize="sm">{title}</Text>
      <Text fontSize="sm" align="end" as={display}>
        {value}
      </Text>
    </>
  )
}

export default PokemonStat
