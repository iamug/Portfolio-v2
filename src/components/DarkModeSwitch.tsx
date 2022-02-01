import { useColorMode, Switch, Box, Flex } from "@chakra-ui/react";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      <Flex position="fixed" top="1rem" right="1rem" py="10px" align="stretch" justify="space-between">
        <Box color="yellow.400" mx="20px">
          <i className="fas fa-sun fa-2x" onClick={() => isDark && toggleColorMode()}></i>
        </Box>

        <Switch color="teal" size="lg" colorScheme="teal" isChecked={isDark} onChange={toggleColorMode} />
        <Box color="gray.600" mx="20px">
          <i className="fas fa-moon fa-2x" onClick={() => !isDark && toggleColorMode()}></i>
        </Box>
      </Flex>
    </>
  );
};
