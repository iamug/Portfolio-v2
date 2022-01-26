import { Container, Flex, Heading, Icon, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { Link as ChakraLink, Text, Stack, Button, Box, IconButton, Image } from "@chakra-ui/react";
import { IWork, Works as data } from "../data/works";
import React from "react";

const Work = ({ name, description, github, live, stack }: IWork) => {
  return (
    <Stack bg={"teal.100"} p={8} rounded="lg" boxShadow="xl">
      <Text fontSize={{ base: "xl" }} color="teal.900" fontWeight={700} minHeight="60px">
        {name}
      </Text>
      <Text noOfLines={5} minH="100px" color={"gray.600"}>
        {description}
      </Text>

      <Text minH={{ base: "10px", lg: "20px" }} fontWeight="700" color={"teal.800"}>
        <span> {stack} </span>
      </Text>
      <Flex pt="8">
        {github && (
          <Button
            as="a"
            href={github}
            target="_blank"
            referrerPolicy="no-referrer"
            size="md"
            mr="4"
            fontWeight={"normal"}
            px={6}
            colorScheme={"teal"}
            bg={"teal.400"}
            _hover={{ bg: "teal.900" }}
          >
            <i className="fab fa-github" />
          </Button>
        )}
        {live && (
          <Button
            as="a"
            href={live}
            target="_blank"
            referrerPolicy="no-referrer"
            size="md"
            fontWeight={600}
            px={6}
            colorScheme={"teal"}
            bg={"teal.400"}
            _hover={{ bg: "teal.900" }}
          >
            View Project
          </Button>
        )}
      </Flex>
    </Stack>
  );
};

export const Works = () => {
  const bg = useColorModeValue("teal.200", "white");
  const color = useColorModeValue("gray.700", "white");

  return (
    <Box id="works" maxW="container.xl" color={color} p={0} pt="60px" pb="60px">
      <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} pb="50px">
        <Text as={"span"} color={color}>
          Projects
        </Text>
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {data.map((item, index) => (
          <Work key={index} {...item} />
        ))}
      </SimpleGrid>
    </Box>
  );
};
