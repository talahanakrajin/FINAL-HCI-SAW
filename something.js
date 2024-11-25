const slides = document.querySelector('.carousel-slides');
        const slide = document.querySelectorAll('.carousel-slide');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        
        let currentIndex = 0;

        function showSlide(index) {
            const width = slide[0].clientWidth;
            slides.style.transform = `translateX(${-index * width}px)`;
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
            showSlide(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
            showSlide(currentIndex);
        });