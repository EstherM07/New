// Sélection du bouton
const bouton = document.getElementById('clicMoi');
const message = document.getElementById('message');

// Ajout d'un événement click
bouton.addEventListener('click', () => {
    message.textContent = "Bravo ! Vous avez cliqué sur le bouton 😊";
    message.style.color = "#ff4500";
});