import React from "react";
import "../styles/_pages.scss/_home.scss/home.scss";
import projectsData from "../assets/BDD_JSON/projects.json";

// composants
import Hero from "../components/Hero";

import Carrousel from "../components/Carrousel";

function Home() {
  return (
    <div>
      <Hero />
      <Carrousel projects={projectsData.projects} />
    </div>
  );
}

export default Home;
