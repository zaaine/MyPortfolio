import React from "react";
import { Button, Tooltip } from "@chakra-ui/react";
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
        <div className="hero_button">
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
            >
              Me contacter
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
