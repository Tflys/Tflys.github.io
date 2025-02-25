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

document.getElementById("translate-btn").addEventListener("click", function () {
    const content = document.getElementById("content");

    if (this.textContent.includes("Inglés")) {
        this.textContent = "Traducir a Español";
        content.innerHTML = `
            <h2>Work Experience</h2>
            <div class="experience">
                <h3>Founder and General Manager</h3>
                <p><strong>Desatascos Ortiz S.L.</strong> | 2010 - Present</p>
            </div>
            
            <h2>Professional Profile</h2>
            <p>I am a Web Application Development (DAW) student, passionate about programming...</p>
            <hr>

            <h2>Education</h2>
            <p><strong>Higher Technician in Web Application Development (DAW)</strong></p>
            <p>IES Francisco Javier De Burgos | Years: (in progress)</p>
            <p><strong>Intermediate Technician in Electrical and Automated Installations</strong></p>
            <p>Centro San Agustín | Years: 19/21</p>
            <hr>
        `;
    } else {
        this.textContent = "Traducir a Inglés";
        location.reload(); // Recarga la página para volver al español
    }
});

