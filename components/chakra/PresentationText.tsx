import { Box, Divider, ListItem, Text, UnorderedList } from "@chakra-ui/react"

interface Props {
  pageStrategy: "ISR" | "SSG" | "SSR"
  explainationText: string
  bulletPoints: string[]
}

const PresentationText = ({
  pageStrategy,
  explainationText,
  bulletPoints,
}: Props) => {
  return (
    <Box
      mb={10}
      bg="gray.100"
      p={4}
      borderRadius="xl"
      maxW={["full", null, "70%"]}>
      <Text>
        This page was built using the following data fetching strategy:
        <Text as="b" mx={1}>
          {pageStrategy}
        </Text>
      </Text>
      <Divider my={5} />
      <Text mb={5}>{explainationText}</Text>
      <Text>
        Here are some points to consider when it comes to {pageStrategy}:
      </Text>
      <UnorderedList>
        {bulletPoints.map((point, num) => (
          <ListItem key={num}>{point}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  )
}

export default PresentationText
