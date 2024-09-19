import React, { useState, useEffect } from "react";
import { Button, Tooltip, color } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import data from "../assets/BDD_JSON/presentation_projects.json";

import "../styles/_pages.scss/Description.scss";

// Fonction pour importer dynamiquement les images des dossiers
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

// Charger les images depuis les dossiers home_img et screenshots
/* eslint-disable-next-line global-require, import/no-dynamic-require */
const homeImages = importAll(
  require.context(
    "../assets/images/home_img",
    false,
    /\.(png|jpe?g|svg|webp)$/,
  ),
);
/* eslint-disable-next-line global-require, import/no-dynamic-require */
const screenshots = importAll(
  require.context(
    "../assets/images/screenshots",
    false,
    /\.(png|jpe?g|svg|webp)$/,
  ),
);

export default function Description() {
  const { id } = useParams(); // Récupérer l'ID depuis l'URL
  const [project, setProject] = useState(null); // État pour stocker le projet sélectionné

  useEffect(() => {
    const projectId = parseInt(id, 10);

    const selectedProject = data.presentation_projects.find(
      (proj) => proj.id === projectId,
    );
    setProject(selectedProject);
  }, [id]);

  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  // Charger les images dynamiquement
  const landscapeImage = homeImages[project.landscape];
  const screenshotImage = screenshots[project.screenshot];

  return (
    <div className="contenaire-description">
      {landscapeImage && (
        <img
          src={landscapeImage}
          alt={`${project.name} Landscape`}
          className="description-image_landscape"
        />
      )}
      <h1 className="description_title">{project.name}</h1>

      <div className="contenaire-texts">
        <h2>
          <strong>Mission :</strong>
        </h2>

        <p className="description_text">{project.Mission}</p>

        <h2>
          <strong>Description :</strong>
        </h2>
        <p className="description_text">{project.description}</p>

        <h2>
          <strong>Livraison :</strong>
        </h2>

        <p className="description_text">{project.livraison}</p>

        <p className="description_text">
          <strong>Langages utilisés :</strong> {project.languages.join(", ")}
        </p>

        {screenshotImage && (
          <img
            src={screenshotImage}
            alt={`${project.name} Screenshot`}
            className="description-image_screenshot"
          />
        )}
      </div>

      <div className="contenaire_buttons">
        <Tooltip label="visiter le site" aria-label="infobulle link">
          <a
            href={project.link_projet}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              colorScheme={color}
              bg={`${color}.400`}
              rounded={"full"}
              px={6}
              _hover={{
                bg: `${color}.500`,
              }}
            >
              Site Web
            </Button>
          </a>
        </Tooltip>

        <Tooltip label="voir le code Git" aria-label="infobulle link">
          <a href={project.Link_Git} target="_blank" rel="noopener noreferrer">
            <Button
              colorScheme={color}
              bg={`${color}.400`}
              rounded={"full"}
              px={6}
              _hover={{
                bg: `${color}.500`,
              }}
            >
              Github
            </Button>
          </a>
        </Tooltip>
      </div>
    </div>
  );
}
