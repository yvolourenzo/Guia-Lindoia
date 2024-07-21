document.addEventListener('DOMContentLoaded', () => {
    // Remove o overlay de carregamento após 1 segundo
    setTimeout(() => {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.style.opacity = '0';
            setTimeout(() => {
                loadingOverlay.style.display = 'none';
            }, 1000); // Tempo para a transição
        }

        const titleOverlay = document.querySelector('.title-overlay');
        if (titleOverlay) {
            titleOverlay.style.opacity = '0';
            setTimeout(() => {
                titleOverlay.style.display = 'none';
            }, 1000); // Tempo para a transição
        }
    }, 5000); // Tempo de exibição do overlay de carregamento

    // Navbar Toggle
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});
