import React from "react";
import { Box, Tooltip, Grid, GridItem } from "@chakra-ui/react";
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaJsSquare,
  FaReact,
  FaPhp,
} from "react-icons/fa";

import "../styles/_base.scss/Base.scss";

export default function Technologies() {
  return (
    <Box p={4}>
      <h2 className="title_technologie"> MES LANGAGES</h2>
      <br />
      <Grid
        templateColumns={{ base: "repeat(3, 2fr)", md: "repeat(6, 1fr)" }}
        gap={6}
        m="4"
        justifyContent="center"
        alignItems="center"
        justifyItems="center"
      >
        <GridItem>
          <Tooltip label="HTML5" aria-label="HTML5">
            <Box>
              <FaHtml5 size="60px" color="#E34F26" /> {/* HTML Icon */}
            </Box>
          </Tooltip>
        </GridItem>

        <GridItem>
          <Tooltip label="CSS3" aria-label="CSS3">
            <Box>
              <FaCss3Alt size="60px" color="#1572B6" /> {/* CSS Icon */}
            </Box>
          </Tooltip>
        </GridItem>

        <GridItem>
          <Tooltip label="SASS" aria-label="SASS">
            <Box>
              <FaSass size="60px" color="#CC6699" /> {/* SASS Icon */}
            </Box>
          </Tooltip>
        </GridItem>

        <GridItem>
          <Tooltip label="JavaScript" aria-label="JavaScript">
            <Box>
              <FaJsSquare size="60px" color="#F7DF1E" /> {/* JavaScript Icon */}
            </Box>
          </Tooltip>
        </GridItem>

        <GridItem>
          <Tooltip label="React" aria-label="React">
            <Box>
              <FaReact size="60px" color="#61DAFB" /> {/* React Icon */}
            </Box>
          </Tooltip>
        </GridItem>

        <GridItem>
          <Tooltip label="PHP" aria-label="PHP">
            <Box>
              <FaPhp size="60px" color="#777BB4" /> {/* PHP Icon */}
            </Box>
          </Tooltip>
        </GridItem>
      </Grid>
    </Box>
  );
}
