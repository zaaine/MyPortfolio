import { extendTheme, theme as chakraTheme } from "@chakra-ui/react";

const { Button } = chakraTheme.components;

// Exemple de personnalisation du thème
const theme = extendTheme({
  components: {
    Button,
  },
  colors: {
    primary: {
      100: "#E5FCF1",
      200: "#27D2A0",
      400: "#215939",
      500: "#1B9875",
      700: "#0A6642",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Roboto, sans-serif",
  },
});

export default theme;
