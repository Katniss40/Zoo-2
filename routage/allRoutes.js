import Route from "./Route.js";

// Définir vos routes ici
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("", "Erreur - 404", "/Pages/404.html"),
    new Route("", "Connexion", "/Pages/Connexion.html"),
];

// Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = " Zoo Arcadia";