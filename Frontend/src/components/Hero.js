import React from "react";
import { Button, Tooltip, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaMedium, FaGithub, FaDownload } from "react-icons/fa";
import Profile from "../assets/profile.png";
import "../styles/_components.scss/Hero.scss";

export default function Hero() {
  const color = "green";

  const handleEmail = () => {
    window.location.href =
      "mailto:contact@zaaine.com?subject=Prise de contact&body=Bonjour Aziz,";
  };

  return (
    <div className="hero_container">
      <img src={Profile} className="hero_image" alt="Mon profile" />
      <div className="hero_texts">
        <h1 className="hero_title">ZAAINE Aziz</h1>
        <p className="hero_subtitle"> Développer Web Frontend </p>
        <p className="hero_text">
          Basé à Paris, je développe des sites créatifs et performants, toujours
          à la recherche de solutions simples et efficaces.
        </p>
        <p className="hero_text">
          {" "}
          "Concevoir, structurer, affiner, développer et déployer : chaque étape
          est essentielle pour donner vie à des projets performants et
          innovants."{" "}
        </p>
        <div className="hero_links">
          <Tooltip
            label="Visiter mon Linkedin"
            aria-label="visiter mon profil Linkedin"
          >
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/aziz-zaaine-7a817732b"
              target="_blank"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
            />
          </Tooltip>
          <Tooltip
            label="visiter mon blog Medium"
            aria-label="Visiter mon blog Medium"
          >
            <IconButton
              as="a"
              href="https://medium.com/@azizzaaine"
              target="_blank"
              aria-label="Medium"
              icon={<FaMedium />}
              size="lg"
            />
          </Tooltip>
          <Tooltip
            label="Visiter mon GitHub"
            aria-label="Visiter mon profil GitHub"
          >
            <IconButton
              as="a"
              href="https://github.com/zaaine"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
            />
          </Tooltip>
          <Tooltip label="Télécharger mon CV" aria-label="Télécharger mon CV">
            <IconButton
              as="a"
              href="../assets/cvDev_zaaineAziz.pdf"
              download="Aziz-CV.pdf"
              aria-label="Télécharger CV"
              icon={<FaDownload />}
              size="lg"
            />
          </Tooltip>
        </div>
        <div className="hero_button" id="portfolio">
          <Tooltip label="Envoyer un mail" aria-label="infobulle envois mail">
            <Button
              colorScheme={color}
              bg={`${color}.400`}
              rounded={"full"}
              px={6}
              _hover={{
                bg: `${color}.500`,
              }}
              onClick={handleEmail}
              id="contact"
            >
              Me contacter
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
