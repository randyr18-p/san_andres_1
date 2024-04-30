// Import Swiper JS
import Swiper from 'swiper';
// Import Swiper styles
import 'swiper/css';

// Initialize the hamburger menu functionality
function initMenu() {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const menuOverlay = document.getElementById('menu');

    if (!menuButton || !closeButton || !menuOverlay) {
        console.error('Menu elements not found!');
        return;
    }

    menuButton.addEventListener('click', () => {
        menuOverlay.classList.toggle('hidden');
    });

    closeButton.addEventListener('click', () => {
        menuOverlay.classList.add('hidden');
    });

    menuOverlay.addEventListener('click', (e) => {
        if (e.target === menuOverlay) {
            menuOverlay.classList.add('hidden');
        }
    });

    document.querySelector("#menu > div").addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Initialize Swiper sliders
function initSwipers() {
    const swiperMain = new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiperContent = new Swiper('.swiper-contenido', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            400: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            850: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            900: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1100: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
}

// Document ready function to initialize everything
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initSwipers();
});
