/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Grid,
  Button,
  ButtonGroup,
  useBreakpointValue,
} from "@chakra-ui/react";
import Cards from "./Cards";
import "../styles/_base.scss/Base.scss";

export default function Carrousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsPerPage = 4;

  // Affiche uniquement 4 projets visibles à la fois
  const visibleProjects = projects.slice(
    currentIndex,
    currentIndex + projectsPerPage,
  );

  // Aller au groupe suivant de projets
  const nextProjects = () => {
    if (currentIndex + projectsPerPage < projects.length) {
      setCurrentIndex(currentIndex + projectsPerPage);
    }
  };

  // Revenir au groupe précédent de projets
  const prevProjects = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - projectsPerPage);
    }
  };

  // Gérer le nombre de colonnes en fonction des breakpoints
  const gridColumns = useBreakpointValue({
    sm: 1, // 1 colonne en dessous de 768px
    md: 2, // 2 colonnes au-dessus de 768px
  });

  // Désactiver les boutons si le nombre total de projets est <= 4
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled =
    currentIndex + projectsPerPage >= projects.length ||
    projects.length <= projectsPerPage;

  return (
    <div>
      <h2 id="portfolio" className="title_portfolio">
        {" "}
        Portfolio{" "}
      </h2>
      <Grid
        templateColumns={`repeat(${gridColumns}, 1fr)`}
        gap={6}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        justifyItems="center"
        mt="5rem"
      >
        {visibleProjects.map((project) => (
          <Cards key={project.id} project={project} />
        ))}
      </Grid>
      <ButtonGroup
        mt={6}
        mb="4rem"
        display="inline-flex"
        justifyContent="center"
        alignItems="baseline"
        alignContent="center"
        flexDirection="row"
        width="100%"
        gap="15%"
      >
        <Button onClick={prevProjects} isDisabled={isPrevDisabled}>
          Précédent
        </Button>
        <Button onClick={nextProjects} isDisabled={isNextDisabled}>
          Suivant
        </Button>
      </ButtonGroup>
    </div>
  );
}
