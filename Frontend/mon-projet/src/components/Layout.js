/* eslint-disable react/prop-types */
import React from "react";
import { Box } from "@chakra-ui/react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <NavBar />
        <Box flex="1">{children}</Box> {/* Contenu principal */}
        <Footer />
      </Box>
    </div>
  );
}
