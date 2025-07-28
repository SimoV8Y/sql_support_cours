// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne tous les boutons "Exemple"
    const exampleToggles = document.querySelectorAll('.example-toggle');
    // Sélectionne tous les boutons "Application"
    const applicationToggles = document.querySelectorAll('.application-toggle');

    // Fonction pour gérer le basculement de visibilité
    function toggleContent(button, targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Vérifie si le contenu est actuellement affiché
            if (targetElement.style.display === 'block') {
                targetElement.style.display = 'none'; // Le cache
                button.textContent = targetId.includes('correction') ? 'Correction' : 'Exemple'; // Rétablit le texte d'origine
            } else {
                targetElement.style.display = 'block'; // L'affiche
                button.textContent = targetId.includes('correction') ? 'Masquer la Correction' : 'Masquer l\'Exemple'; // Change le texte du bouton
            }
        }
    }

    // Ajoute un écouteur d'événements à chaque bouton "Exemple"
    exampleToggles.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target; // Récupère l'ID de la cible depuis l'attribut data-target
            toggleContent(button, targetId);
        });
    });

    // Ajoute un écouteur d'événements à chaque bouton "Application"
    applicationToggles.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target; // Récupère l'ID de la cible depuis l'attribut data-target
            toggleContent(button, targetId);
        });
    });
});
