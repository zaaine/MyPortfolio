/* eslint-disable react/jsx-curly-brace-presence */
import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={14} align="center">
        <Text>© 2024 Zaaine Aziz. All rights reserved</Text>
      </Container>
    </Box>
  );
}