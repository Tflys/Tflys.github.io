// Animación de desvanecimiento para la carga de la página
window.onload = function() {
    document.body.classList.add('fade-in');
}

// Mostrar u ocultar detalles de los proyectos al hacer clic
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('click', function() {
        this.classList.toggle('show-details');
    });
});

// Agregar efectos de hover para enlaces
const socialLinks = document.querySelectorAll('.contact-info a');
socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#2980b9';
        this.style.transition = 'color 0.3s';
    });
    link.addEventListener('mouseleave', function() {
        this.style.color = '';
    });
});
