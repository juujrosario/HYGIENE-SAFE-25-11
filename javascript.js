const menuHamburger = document.querySelector('.menu-hamburger');
const menu = document.querySelector('.itens');

menuHamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
});


let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.imagem_repre').length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides; // Looping circular
    const offset = -currentIndex * 100; // Ajusta o deslocamento
    slides.style.transform = `translateX(${offset}%)`;
}

// Opção para mover automaticamente as imagens a cada 3 segundos (opcional)
setInterval(() => {
    moveSlide(1);
}, 2500);