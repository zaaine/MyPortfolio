// generate-sitemap.js

const fs = require("fs");
const path = require("path");
const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

// Définissez votre URL de base
const hostname = "https://portfolio.zaaine.com";

// Liste de toutes les URLs statiques de votre site
const staticLinks = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/Portfolio", changefreq: "monthly", priority: 0.8 },
  // Ajoutez ici d'autres pages statiques si nécessaire
];

// Importer les projets dynamiques
const projectsData = require("./src/assets/BDD_JSON/projects.json");

// Générer les liens pour les projets
const projectLinks = projectsData.projects.map((project) => ({
  url: `/description/${project.id}`, // Basé sur la configuration actuelle du routeur
  changefreq: "monthly",
  priority: 0.7,
  lastmod: project.lastmod, // Date de dernière modification
}));

// Combiner les liens statiques et dynamiques
const links = [...staticLinks, ...projectLinks];

// Fonction pour générer le sitemap
const generateSitemap = async () => {
  try {
    const stream = new SitemapStream({ hostname });
    const xml = await streamToPromise(Readable.from(links).pipe(stream)).then(
      (data) => data.toString(),
    );

    // Écrire le fichier sitemap.xml dans le dossier public
    fs.writeFileSync(path.resolve(__dirname, "public", "sitemap.xml"), xml);
    console.log("Sitemap généré avec succès !");
  } catch (error) {
    console.error("Erreur lors de la génération du sitemap :", error);
  }
};

// Exécuter la fonction
generateSitemap();
