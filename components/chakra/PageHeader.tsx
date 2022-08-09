import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react"

interface Props {
  linkText: string
  docLink: string
  method: string
  date?: string
}

const PageHeader = ({ date, docLink, method, linkText }: Props) => {
  return (
    <Box pb={8}>
      <Flex placeContent="space-between" mb={2}>
        <Box>
          <Heading display="inline-block" mr={2}>
            Pokemon list
          </Heading>
          {date && (
            <Text fontSize="sm" display="inline-block">
              (last build: {date})
            </Text>
          )}
        </Box>
        <Link href={docLink} isExternal>
          <Button>{linkText}</Button>
        </Link>
      </Flex>
      <Text display="inline-block" mr={2}>
        Method to use:
      </Text>
      <Text as="pre" display="inline-block" fontSize="sm">
        {method}
      </Text>
    </Box>
  )
}

export default PageHeader
