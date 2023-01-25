import { ArrowDownIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { Link, Text, Stack, Button, Box, IconButton, Image } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => {
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
              <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}>
                <Text as={"span"} fontWeight={400} fontSize={{ base: "xl", md: "2xl" }} color={color}>
                  Hi There,
                </Text>
                <br />
                <Text as={"span"} color={color}>
                  I'm Aguziendu Ugochukwu
                </Text>
              </Heading>
              <Text color={color} lineHeight={1.5} fontSize={{ base: "xl" }}>
                I'm a Full-Stack software engineer based in Lagos Nigeria. I build software solutions which involves beautiful
                interactive interfaces that communicate with well structured backend APIs.
              </Text>
              <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
                <Button
                  as="a"
                  href="https://drive.google.com/file/d/1YgnwIeErzK2eZW1V2_tYVcFrcC0HuQCS/view"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  size={"lg"}
                  fontWeight={"600"}
                  px={6}
                  colorScheme={"teal"}
                  bg={"teal.400"}
                  _hover={{ bg: "teal.900" }}
                  rightIcon={<ExternalLinkIcon fontSize="xl" mx="2px" />}
                >
                  Download Resume
                </Button>

                <Button
                  as="a"
                  href="#works"
                  size={"lg"}
                  fontWeight={"600"}
                  px={6}
                  colorScheme={"teal"}
                  bg={"teal.400"}
                  _hover={{ bg: "teal.900" }}
                  rightIcon={<ArrowDownIcon fontSize="xl" mx="2px" />}
                >
                  View Projects
                </Button>
              </Stack>
            </Stack>
            <Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
              <Box position={"relative"}>
                <Image
                  alt={"Hero Image"}
                  borderRadius="full"
                  boxShadow={"2xl"}
                  fit={"cover"}
                  align={"center"}
                  boxSize={{ sm: "200px", md: "500px" }}
                  src={"https://avatars.githubusercontent.com/u/11047676"}
                />
              </Box>
            </Flex>
          </Stack>
        </Flex>
      </Box>
      {/* <Flex justifyContent="center" alignItems="center" height="100vh" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        <Heading fontSize="6vw">{title}</Heading>
      </Flex> */}
    </>
  );
};

Hero.defaultProps = {
  title: "with-chakra-ui-typescript",
};
