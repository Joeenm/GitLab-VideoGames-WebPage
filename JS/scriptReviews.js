document.addEventListener('DOMContentLoaded', () => {
    loadReviews();
});

function loadReviews() {
    // Cargar el contenido de las reseñas
    fetch('reviews.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('reviews-section').innerHTML = data;
        })
        .catch(error => console.error('Error loading reviews:', error));
}