// Espera o carregamento da página
window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loading-overlay');
    // Define a opacidade para 0 para desaparecer lentamente
    loadingOverlay.style.opacity = 0;
    // Remove o overlay do DOM após a transição de opacidade
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 5000); // Tempo igual ao da transição de opacidade (3s)
});
