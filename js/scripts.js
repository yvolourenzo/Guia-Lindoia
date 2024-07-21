document.addEventListener('DOMContentLoaded', () => {
    // Remove o overlay de carregamento após 5 segundos
    setTimeout(() => {
        document.getElementById('loading-overlay').style.opacity = '0';
        document.querySelector('.title-overlay').style.animation = 'fadeOut 3s ease-out forwards';
    }, 5000);

    // Navbar Toggle
    const toggleButton = document.getElementById('navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
});
