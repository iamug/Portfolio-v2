import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  styles: {
    global: {
      a: {
        _hover: {
          color: "gray.300",
          boxShadow: "xl",
        },
      },
    },
  },
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
});

export default theme;
