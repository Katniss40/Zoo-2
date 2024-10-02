import Route from "./Route.js";

// Définir vos routes ici
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/pages/connexion", "connexion", "/pages/connexion.html"),
    new Route("/pages/contact", "Contact", "/pages/contact.html"),
    new Route("/pages/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/pages/jungle", "Jungle", "/pages/jungle.html"),
    new Route("/pages/marais", "Marais", "/pages/marais.html"),
    new Route("/pages/savane", "Savane", "/pages/savane.html"),
    new Route("/pages/service", "Service", "/pages/services.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";