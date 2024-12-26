const audio = document.getElementById('backgroundMusic');
const toggleButton = document.getElementById('toggleMusic');

// Fonction pour gérer la lecture audio
function playAudio() {
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
        // Afficher un bouton "Cliquez pour jouer la musique"
        toggleButton.style.display = 'block';
    });
}

// Essayer de jouer automatiquement lors du chargement
document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si l'utilisateur a déjà interagi avec la page
    if (document.visibilityState === 'visible') {
        playAudio();
    }
});

// Gestionnaire d'événement pour les interactions utilisateur
document.addEventListener('click', function(event) {
    // Ne pas relancer si déjà en cours de lecture
    if (audio.paused) {
        playAudio();
    }
});

// Gestion du bouton de toggle
toggleButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        toggleButton.textContent = 'Pause';
    } else {
        audio.pause();
        toggleButton.textContent = 'Play';
    }
});