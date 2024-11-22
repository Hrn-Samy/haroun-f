document.addEventListener('DOMContentLoaded', function () {
    // Animation des boutons
    const buttons = document.querySelectorAll('.details-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.1)';
            button.style.transition = 'transform 0.2s ease';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Pop-up dynamique lors du clic sur une formation
    const cards = document.querySelectorAll('.formation-card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('p').textContent;
            const popup = document.createElement('div');
            popup.classList.add('popup');

            popup.innerHTML = `
                <div class="popup-content">
                    <h2>${title}</h2>
                    <p>${description}</p>
                    <button class="close-btn">Fermer</button>
                </div>
            `;
            document.body.appendChild(popup);

            // Fermer la pop-up
            const closeButton = popup.querySelector('.close-btn');
            closeButton.addEventListener('click', () => {
                popup.remove();
            });
        });
    });
});
