document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel');
    const btnPrev = document.getElementById('btnPrev');
    const btnNext = document.getElementById('btnNext');

    const scrollAmount = 400;

    if (btnPrev && btnNext && carrusel) {
        btnPrev.addEventListener('click', () => {
            carrusel.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        btnNext.addEventListener('click', () => {
            carrusel.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
});
