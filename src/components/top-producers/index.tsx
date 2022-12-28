import { Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import { ComponentProps } from "react"
import { Producer } from "./producer"
import { topProducers } from "./producers-data"

export const TopProducers = (props: ComponentProps<typeof VStack>) => {
  return (
    <VStack align={"flex-start"} spacing={{ base: 6, '2xl': 8 }} height={"full"} pb={6} {...props}>
      <SimpleGrid columns={3} gap={{ base: 4, '2xl': 8 }}>
        {topProducers.map((producer, index) => (
          <Producer key={producer.name} {...producer} badge={index === 0}/>
        ))}
      </SimpleGrid>
      <VStack flex={1} spacing={4} alignItems={"flex-start"} width={"full"}>
        <Heading
          color={"gray.light"}
          fontWeight={"normal"}
          textTransform={"uppercase"}
          letterSpacing={3}
          fontSize={"sm"}
        >
          Your Selection
        </Heading>
        <VStack
          width={"full"}
          flex={1}
          bg={"gray.dark"}
          alignItems={"center"}
          justifyContent={"center"}
          rounded={"lg"}
        >
          <Heading
            color={"gray.light"}
            fontWeight={"normal"}
            fontSize={"xl"}
          >
            Nothing Selected
          </Heading>
        </VStack>
      </VStack>
    </VStack>
  )
}