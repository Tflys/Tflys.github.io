document.addEventListener("DOMContentLoaded", function () {
    const translateBtn = document.getElementById("translate-btn");
    const content = document.getElementById("content");

    if (!translateBtn || !content) {
        console.error("No se encontró el botón o el contenido.");
        return;
    }

    let isEnglish = false; // Variable para controlar el idioma actual

    translateBtn.addEventListener("click", function () {
        if (!isEnglish) {
            // Traducir a inglés
            content.innerHTML = `
                <button id="translate-btn">Translate to Spanish</button> <!-- Reinsertamos el botón -->
                
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

            isEnglish = true;
        } else {
            location.reload(); // Volver a la versión en español recargando la página
        }

        // Reasignar el evento al botón después de actualizar el contenido
        document.getElementById("translate-btn").addEventListener("click", arguments.callee);
    });
});

