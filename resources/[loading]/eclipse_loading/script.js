const music = document.getElementById("music");
const toggleBtn = document.getElementById("music-toggle");
const volumeSlider = document.getElementById("volume-slider");

// Lancement musique
window.addEventListener("load", () => {
    music.volume = 0.5;

    music.play().then(() => {
        toggleBtn.textContent = "⏸ Pause";
    }).catch(() => {
        toggleBtn.textContent = "▶ Play";
    });
});

// Play / Pause
toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    if (music.paused) {
        music.play();
        toggleBtn.textContent = "⏸ Pause";
    } else {
        music.pause();
        toggleBtn.textContent = "▶ Play";
    }
});

// Volume
volumeSlider.addEventListener("input", () => {
    music.volume = volumeSlider.value;
});


// PROGRESS SYSTEM
let progress = document.getElementById("progress");
let text = document.getElementById("loading-text");

let load = 0;

let messages = [
    "Connexion à Los Santos...",
    "Chargement des scripts...",
    "Préparation des véhicules...",
    "Initialisation du RP...",
    "L’éclipse approche..."
];

let interval = setInterval(() => {
    if (load >= 100) {
        clearInterval(interval);
    } else {
        load++;
        progress.style.width = load + "%";

        if (load % 20 === 0) {
            text.innerText = messages[Math.floor(load / 20)];
        }
    }
}, 80);
