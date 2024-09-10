/* eslint-disable react/jsx-curly-brace-presence */

import React, { useState } from "react";
import {
  Flex,
  Button,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  useColorModeValue,
  Stack,
  useColorMode,
  IconButton,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { FaLinkedin, FaMedium } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../styles/_components.scss/NavBar.scss";
import logo from "../assets/AZ_logo.png";

export default function NavBar() {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    const projectsSection = document.querySelector("#portfolio");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const changeScroll = () =>
    document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
      ? setScroll(true)
      : setScroll(false);

  window.addEventListener("scroll", changeScroll);

  return (
    <div>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        boxShadow={scroll ? "base" : "none"}
        zIndex="sticky"
        position="fixed"
        as="header"
        justifyContent={"space-between"}
        alignItems={"center"}
        w="100%"
      >
        <Button variant="ghost">
          <Link to="/">
            <img src={logo} alt="Retour page accueil" className="nav_logo" />
          </Link>
        </Button>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            {isLargerThanMD ? (
              <>
                <Button variant="ghost">
                  <Link to="/about">About</Link>
                </Button>

                <Button variant="ghost" onClick={scrollToPortfolio}>
                  Portfolio
                </Button>
                <Button variant="ghost" onClick={scrollToContact}>
                  Contact
                </Button>
              </>
            ) : null}

            <IconButton
              as="a"
              href="https://www.linkedin.com/in/ton-profil-linkedin"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
            />

            <IconButton
              as="a"
              href="https://www.medium.com/ton-profil-medium"
              target="_blank"
              aria-label="Medium"
              icon={<FaMedium />}
            />
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>

            {!isLargerThanMD && (
              <>
                <Button
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  onClick={onOpen}
                />
                <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerBody>
                      <Button variant="ghost" onClick={scrollToAbout}>
                        About
                      </Button>

                      <Button variant="ghost" onClick={scrollToPortfolio}>
                        Portfolio
                      </Button>
                      <Button variant="ghost" onClick={scrollToContact}>
                        Contact
                      </Button>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </>
            )}
          </Stack>
        </Flex>
      </Flex>
    </div>
  );
}
