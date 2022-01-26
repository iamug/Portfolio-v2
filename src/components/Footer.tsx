import { Flex, FlexProps, Box, Text, useColorModeValue, useColorMode, chakra } from "@chakra-ui/react";
import { Container, Stack, VisuallyHidden, Spacer } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Footer = (props: FlexProps) => {
  const { colorMode } = useColorMode();
  const bg = useColorModeValue("teal.900", "white");
  const color = useColorModeValue("gray.700", "white");

  const SocialButton = ({ children, label, href }: { children: ReactNode; label: string; href: string }) => {
    return (
      <chakra.button
        bg={"teal.900"}
        rounded={"full"}
        color={"#ffffff"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        target="_blank"
        referrerPolicy="no-referrer"
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
          color: "teal:800",
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  return (
    <Box color={color} minW={{ base: "full", lg: "container.xl" }}>
      <Flex
        py={4}
        direction={{ base: "row", md: "row" }}
        spacing={4}
        justify={{ base: "space-between", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Box textAlign="left">
          <Text noOfLines={[4, 3, 1, 2]}>
            © {new Date().getFullYear()} Designed & Developed by Aguziendu Ugochukwu with Next ❤️ Chakra{" "}
          </Text>
        </Box>
        <Stack justify="" direction={"row"} spacing={6}>
          <SocialButton label={"Github"} href={"https://github.com/iamug"}>
            <i className="fab fa-github" />
          </SocialButton>
          <SocialButton label={"Linkedln"} href={"https://www.linkedin.com/in/aguziendu-ugochukwu/"}>
            <i className="fab fa-linkedin-in" />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"https://instagram.com/iamug_"}>
            <i className="fab fa-instagram" />
          </SocialButton>
        </Stack>
      </Flex>
    </Box>
  );
};
