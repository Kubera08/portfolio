// script.js
document.getElementById('view-cv').addEventListener('click', () => {
    // Ouvre le fichier dans un nouvel onglet
    window.open('mycv.pdf', '_blank');
});


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = 'none'; // Cache le loader après 2 secondes
    }, 2000);
});


const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');

// Sélectionner toutes les images cliquables
const clickableImages = document.querySelectorAll('.clickable_photo_paris');

// Boucle sur chaque image pour ajouter un gestionnaire d'événements
clickableImages.forEach(img => {
    img.onclick = function() {
        modal.style.display = 'flex'; // Affiche la modal
        modalImg.src = this.src; // Définit la source de l'image agrandie
    }
});

// Ferme la modal lorsque l'utilisateur clique sur la croix
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Ferme la modal si l'utilisateur clique en dehors de l'image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

