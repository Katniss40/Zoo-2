import Route from "./Route.js";

// Définir vos routes ici
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/connexion", "connexion", "/pages/connexion.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/habitats", "Habitats", "/pages/habitats.html"),
    new Route("/jungle", "Jungle", "/pages/jungle.html"),
    new Route("/marais", "Marais", "/pages/marais.html"),
    new Route("/savane", "Savane", "/pages/savane.html"),
    new Route("/service", "Service", "/pages/services.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Zoo Arcadia";