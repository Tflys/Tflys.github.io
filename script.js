document.addEventListener("DOMContentLoaded", function () {
    // Animación de desvanecimiento al cargar la página
    document.body.classList.add('fade-in');

    // Obtener el botón y el contenido
    const translateBtn = document.getElementById("translate-btn");
    const content = document.getElementById("content");

    if (!translateBtn || !content) {
        console.error("No se encontró el botón o el contenido.");
        return;
    }

    // Evento de traducción al hacer clic en el botón
    translateBtn.addEventListener("click", function () {
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

                <h2>Languages</h2>
                <ul class="languages">
                    <li>Spanish: Native</li>
                    <li>English: Intermediate (B1)</li>
                </ul>
            `;
        } else {
            this.textContent = "Traducir a Inglés";
            location.reload(); // Recarga la página para volver al español
        }
    });
});
