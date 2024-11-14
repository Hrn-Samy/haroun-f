// Animation de carrousel simple pour les témoignages
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Changement de slide toutes les 5 secondes
setInterval(nextSlide, 5000);

// Initialisation
showSlide(currentSlide);
