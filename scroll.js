// Fonction pour scroller jusqu'à une section spécifique
function scrollToDefinition() {
    // Récupérer la lettre entrée
    const input = document.getElementById("searchInput").value.trim().toUpperCase();

    // Vérifier si une section correspond à la lettre
    const sections = document.querySelectorAll("h2.body");
    let found = false;

    sections.forEach((section) => {
        if (section.textContent.trim().toUpperCase() === input) {
            section.scrollIntoView({ behavior: "smooth" });
            found = true;
        }
    });

    if (!found) {
        alert("Aucune section correspondant à cette lettre n'a été trouvée.");
    }
}
const __author = "edgrc";
// Associé la touche entrée pour rechercher la lettre
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");

    if (searchInput) {
        searchInput.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Empêche le comportement par défaut
                scrollToDefinition(); // Appelle la fonction de recherche
            }
        });
    }
});

