import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../assets/BDD_JSON/presentation_projects.json";

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
    // Convertir l'ID en nombre entier avec parseInt
    const projectId = parseInt(id, 10);
    // Trouver le projet correspondant dans le fichier JSON
    const selectedProject = data.presentation_projects.find(
      (proj) => proj.id === projectId,
    );
    setProject(selectedProject);
  }, [id]);

  // Si le projet n'est pas trouvé, afficher un message d'erreur
  if (!project) {
    return <p>Projet non trouvé</p>;
  }

  // Charger les images dynamiquement
  const landscapeImage = homeImages[project.landscape];
  const screenshotImage = screenshots[project.screenshot];

  return (
    <div>
      {landscapeImage && (
        <img src={landscapeImage} alt={`${project.name} Landscape`} />
      )}
      <h1>{project.name}</h1>
      <p>
        <strong>Mission :</strong> {project.Mission}
      </p>
      <p>
        <strong>Description :</strong> {project.description}
      </p>
      <p>
        <strong>Livraison :</strong> {project.livraison}
      </p>
      <p>
        <strong>Langages utilisés :</strong> {project.languages.join(", ")}
      </p>

      {screenshotImage && (
        <img src={screenshotImage} alt={`${project.name} Screenshot`} />
      )}
      <p>
        <a href={project.link_projet} target="_blank" rel="noopener noreferrer">
          Voir le projet en ligne
        </a>
      </p>
      <p>
        <a href={project.Link_Git} target="_blank" rel="noopener noreferrer">
          Voir le code sur GitHub
        </a>
      </p>
    </div>
  );
}
