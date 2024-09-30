import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";

// Création d'une route pour la page 404 introuvable
const route404 = new Route("404", "Page introuvable", "Pages/404.html");

// Fonction pour recupere la route correspondant a un URL donné
const getRouteByUrl = (url) => {
    let currentRoute = null;
    // Parcours de toutes les routes pour trouver la correspondance
    allRoutes.forEach((element) => {
        if(element.url == url) {
            currentRoute = element;
        }
    });
    // Si aucune correspondance n'est trouvée, on retourne la route 404
    if(currentRoute != null){
        return currentRoute;
    } else {
        return route404;
    }
};

// FOnction pour charger le contenu de la page
const loadContentPage = async () => {
    const path = window.location.pathname;
    // Récuperation de l'url actuelle
    const actualRoute = getRouteByUrl(path);
    // Récuperation du contenu HTML de la route
    const html = await fetch(actualRoute.pathHtml).then((data) => data.text());
    // Ajout du contenu Html ) l'element avec l'ID "main-page"
    document.getElementById("main-page").innerHTML = html;

    // Ajout du contenu Javascript
    if(actualRoute.pathJs != "") {
        // Création d'une balisse script
        let scriptTag = document.createElement("script");
        scriptTag.setAttribute("type", "text/javascript");
        scriptTag.setAttribute("src", actualRoute.pathJs);

        // Ajout de la balise script au corps du document
        document.querySelector("body").appendChild(scriptTag);
    }

    // Chargement du titre de la page
    document.title = actualRoute.title + " - " + websiteName;
};

// Fonction pour gere les evenements de routage (clic sur les liens)
const routeEvent = (event) => {
    event = event || window.event;
    event.preventDefault();
    // Mise a jour de l'url dans l'historique du navigateur
    window.history.pushState({}, "", event.target.href);
    // Chargement du contenu de la nouvelle page
    loadContentPage();
};

// Gestion de l'evenement de retour en arrière dans l'historique du navigateur
window.onpopstate = loadContentPage;
// Assignation de la fontion de routeEvent a la propriete route de la fenetre
window.route = routeEvent;
// Chargment du contenu de la page au chargement initial
loadContentPage();
