// Ajout d'une animation pour les boutons "En savoir plus"
document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.details-btn');
    buttons.forEach(function (button) {
        button.addEventListener('mouseenter', function () {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.2s ease';
        });
        button.addEventListener('mouseleave', function () {
            button.style.transform = 'scale(1)';
        });
    });

    // Ajout d'un événement de clic sur les cartes de formation
    var cards = document.querySelectorAll('.formation-card');
    cards.forEach(function (card) {
        card.addEventListener('click', function () {
            var category = card.getAttribute('data-category');
            console.log('Formation sélectionnée : ' + category);
            alert('Formation sélectionnée : ' + category);
        });
    });
});
