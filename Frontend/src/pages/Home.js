import React from "react";
import { Helmet } from "react-helmet";
import "../styles/_pages.scss/_home.scss/home.scss";
import projectsData from "../assets/BDD_JSON/projects.json";

// composants
import Hero from "../components/Hero";
import Carrousel from "../components/Carrousel";
import Technologies from "../components/Technologies";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Accueil - Mon Portfolio</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio personnel."
        />
        <meta
          name="keywords"
          content="React, Portfolio, Développeur, Frontend, Php, html, css , Javascript, Junior, Freelance"
        />
        <link rel="canonical" href="https://www.porfolio.zaaine.com/" />
      </Helmet>
      <Hero />
      <Carrousel projects={projectsData.projects} />
      <Technologies />
    </div>
  );
}

export default Home;
