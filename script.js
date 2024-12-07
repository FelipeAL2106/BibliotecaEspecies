document.addEventListener("DOMContentLoaded", function() {
    // Seleccionar todos los botones de audio
    const audioButtons = document.querySelectorAll('.audio-btn');
    
    // Asignar eventos a los botones
    audioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audio = this.nextElementSibling; // Selecciona el elemento de audio que sigue al botón
            if (audio.paused) {
                audio.play();
                this.innerText = "Pausar Audio";
            } else {
                audio.pause();
                this.innerText = "Reproducir Audio";
            }
        });
    });
});
