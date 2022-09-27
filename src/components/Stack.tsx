import {
  Container,
  Flex,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  useColorMode,
  useColorModeValue,
  Wrap,
} from "@chakra-ui/react";
import { Link as ChakraLink, Text, Stack, Button, Box, IconButton, Image } from "@chakra-ui/react";
import { CheckCircleIcon, CheckIcon, LinkIcon } from "@chakra-ui/icons";
import { IWork, Works as data } from "../data/works";
import React, { ReactElement } from "react";

export const Stacks = () => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("teal.200", "white");
  const color = useColorModeValue("gray.700", "white");

  const StackBox = ({ children }) => (
    <Box
      p={8}
      rounded="lg"
      border="1px"
      minW="250px"
      _hover={{ boxShadow: "2xl", color: "teal:700", bg: colorMode == "light" ? "teal.100" : "red:800" }}
      borderColor="teal.100"
    >
      {children}
    </Box>
  );

  return (
    <Box minW="container" color={color} pt="60px" pb="60px">
      <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} pb="50px">
        <Text as={"span"} color={color}>
          Tech Stack
        </Text>
      </Heading>
      <Wrap justifyContent="start" alignItems="start" alignContent="start" columns={{ base: 2, md: 3, lg: 4 }} spacing={20}>
        <StackBox>
          <Text fontSize={{ base: "xl" }} color={color} fontWeight={700} minHeight="3rem">
            Frontend
          </Text>
          <Box color={color} fontWeight="600">
            <List spacing={3}>
              {["Reactjs", "Nextjs", "Material UI", "Bootstrap", "TailwindCSS"].map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={CheckIcon} color="green.500" /> {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </StackBox>
        <StackBox>
          <Text fontSize={{ base: "xl" }} color={color} fontWeight={700} minHeight="3rem">
            Backend
          </Text>
          <Box color={color} fontWeight="600">
            <List spacing={3}>
              {["Nodejs / Express", "Nestjs", "FastAPI", "Golang / Fiber"].map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={CheckIcon} color="green.500" /> {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </StackBox>
        <StackBox>
          <Text fontSize={{ base: "xl" }} color={color} fontWeight={700} minHeight="3rem">
            Tools
          </Text>
          <Box color={color} fontWeight="600">
            <List spacing={3}>
              {["Github Actions ", "Docker", "Jest", "GCP / AWS"].map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={CheckIcon} color="green.500" /> {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </StackBox>
        <StackBox>
          <Text fontSize={{ base: "xl" }} color={color} fontWeight={700} minHeight="3rem">
            Database
          </Text>
          <Box color={color} fontWeight="600">
            <List spacing={3}>
              {["MongoDB", "MySQL", "Redis"].map((item, index) => (
                <ListItem key={index}>
                  <ListIcon as={CheckIcon} color="green.500" /> {item}
                </ListItem>
              ))}
            </List>
          </Box>
        </StackBox>
      </Wrap>
    </Box>
  );
};
