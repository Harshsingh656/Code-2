let currentIndex = 0;
const slides = document.querySelector('.slider');
const totalSlides = slides.children.length;

document.body.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && currentIndex < totalSlides - 1) {
        currentIndex++;
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        currentIndex--;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
});
