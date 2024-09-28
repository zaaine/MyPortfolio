/* eslint-disable react/jsx-curly-brace-presence */

import React, { useState, useEffect } from "react";
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
  Tooltip,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/_components.scss/NavBar.scss";
import logo from "../assets/AZ_logo.png";

export default function NavBar() {
  const [scroll, setScroll] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThanMD] = useMediaQuery("(min-width: 48em)");
  const [isAboutPage, setIsAboutPage] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleEmail = () => {
    window.location.href =
      "mailto:contact@zaaine.com?subject=Prise de contact&body=Bonjour Aziz,";
  };

  useEffect(() => {
    if (location.pathname === "/about") {
      setIsAboutPage(true);
    } else {
      setIsAboutPage(false);
    }
  }, [location.pathname]);

  const scrollToPortfolio = () => {
    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      const projectsSection = document.querySelector("#portfolio");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#portfolio");
    }
  };

  useEffect(() => {
    const changeScroll = () =>
      document.body.scrollTop > 80 || document.documentElement.scrollTop > 80
        ? setScroll(true)
        : setScroll(false);

    window.addEventListener("scroll", changeScroll);

    return () => {
      window.removeEventListener("scroll", changeScroll);
    };
  }, []);

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
          <Tooltip
            label="Retour à l'accueil"
            aria-label="infobulle retour accueil"
          >
            <Link to="/">
              <img
                src={logo}
                alt="Retour page accueil"
                className="nav_logo"
                style={{ cursor: "help" }}
              />
            </Link>
          </Tooltip>
        </Button>
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7} className="stack_btns">
            {isLargerThanMD ? (
              <>
                {isAboutPage ? (
                  <Button variant="ghost">
                    <Link to="/">Home</Link>
                  </Button>
                ) : (
                  <Button variant="ghost">
                    <Link to="/about">About</Link>
                  </Button>
                )}

                <Button variant="ghost" onClick={scrollToPortfolio}>
                  Portfolio
                </Button>
                <Button variant="ghost" onClick={handleEmail}>
                  Contact
                </Button>
              </>
            ) : null}

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
                      {isAboutPage ? (
                        <Button variant="ghost">
                          <Link to="/">Home</Link>
                        </Button>
                      ) : (
                        <Button variant="ghost">
                          <Link to="/about">About</Link>
                        </Button>
                      )}
                      <Button variant="ghost" onClick={scrollToPortfolio}>
                        Portfolio
                      </Button>
                      <Button variant="ghost" onClick={handleEmail}>
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
