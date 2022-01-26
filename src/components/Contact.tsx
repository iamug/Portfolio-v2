import { ArrowDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Link, Text, Stack, Button, Box, IconButton, Image } from "@chakra-ui/react";

export const Contact = () => {
  const color = useColorModeValue("gray.700", "white");

  return (
    <>
      <Box maxW="container.xl" color={color}>
        <Flex justifyContent="center" alignItems="center" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
          <Stack
            align={"center"}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading lineHeight={1.6} fontWeight={400} fontSize={{ base: "xl", sm: "2xl", lg: "4xl" }}>
                <Text as={"span"} color={color}>
                  If you like my work or you just want to say hi, you can send me an email at
                  <Link
                    fontWeight={600}
                    textDecoration="underline"
                    size="3xl"
                    isExternal
                    href="mailto:uaguziendu@gmail.com "
                    _hover={{ boxShadow: "unset", color: "unset" }}
                  >
                    {" "}
                    uaguziendu@gmail.com <ExternalLinkIcon fontSize="3xl" mx="2px" />
                  </Link>
                </Text>
              </Heading>
            </Stack>
          </Stack>
        </Flex>
      </Box>
      {/* <Flex justifyContent="center" alignItems="center" height="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        <Heading fontSize="6vw">{title}</Heading>
      </Flex> */}
    </>
  );
};
