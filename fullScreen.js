function openFullScreen() {
    const iframeG = document.querySelector('.game-frame');
    if (iframeG) {
        iframeG.style.display = 'block'; // Mostrar el iframe

        // Solicitar pantalla completa
        if (iframeG.requestFullscreen) {
            iframeG.requestFullscreen();
        } else if (iframeG.mozRequestFullScreen) { // Firefox
            iframeG.mozRequestFullScreen();
        } else if (iframeG.webkitRequestFullscreen) { // Chrome, Safari, Opera
            iframeG.webkitRequestFullscreen();
        } else if (iframeG.msRequestFullscreen) { // IE/Edge
            iframeG.msRequestFullscreen();
        }

        // Escuchar el evento fullscreenchange para detectar cuando se salga de pantalla completa
        document.addEventListener('fullscreenchange', exitFullScreenHandler);
        document.addEventListener('webkitfullscreenchange', exitFullScreenHandler);
        document.addEventListener('mozfullscreenchange', exitFullScreenHandler);
        document.addEventListener('MSFullscreenChange', exitFullScreenHandler);
}

    // Función para manejar la salida de pantalla completa
    function exitFullScreenHandler() {
        const iframeG = document.querySelector('.game-frame');

        // Verifica si ya no está en pantalla completa
        if (!document.fullscreenElement &&
            !document.webkitFullscreenElement &&
            !document.mozFullScreenElement &&
            !document.msFullscreenElement) {
            
            // Ocultar el iframe cuando se salga de pantalla completa
            iframeG.style.display = 'none';

            // Remover los event listeners para evitar fugas de memoria
            document.removeEventListener('fullscreenchange', exitFullScreenHandler);
            document.removeEventListener('webkitfullscreenchange', exitFullScreenHandler);
            document.removeEventListener('mozfullscreenchange', exitFullScreenHandler);
            document.removeEventListener('MSFullscreenChange', exitFullScreenHandler);
        }
    }
}