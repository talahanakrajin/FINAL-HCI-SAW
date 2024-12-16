document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    
    let currentIndex = 0;
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to each other
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
    
    const moveToSlide = (currentIndex) => {
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
        // Update active class
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        
        // Add active class to center slide
        if (slides[currentIndex + 1]) {
            slides[currentIndex + 1].classList.add('active');
        }
    };
    
    // Initialize first set of slides
    moveToSlide(0);
    
    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 3) {
            currentIndex++;
            moveToSlide(currentIndex);
        }
    });
    
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            moveToSlide(currentIndex);
        }
    });
});