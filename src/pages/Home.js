import React from "react";
import "../styles/_pages.scss/_home.scss/home.scss";

// composants
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import Carrousel from "../components/Carrousel";

function Home() {
  return (
    <div>
      <Hero />
      <Cards />
      <Carrousel />
    </div>
  );
}

export default Home;
