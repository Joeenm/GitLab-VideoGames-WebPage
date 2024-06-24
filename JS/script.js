// Scroll to top button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Cargar la galería de imágenes y el archivo CSS
function loadGallery() {
    // Cargar el contenido de la galería
    fetch('gallery.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('gallery-container').innerHTML = data;
        // Cargar el archivo CSS después de insertar la galería
        loadGalleryStyles();
      })
      .catch(error => console.error('Error loading gallery:', error));
  }
  
  // Llamar a la función para cargar la galería
  document.addEventListener('DOMContentLoaded', loadGallery);