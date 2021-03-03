class Slides {
    constructor(carouselId) {
        this.currentSlide = 0;
        this.slides = document.getElementById(carouselId).querySelectorAll('.car-slide');
        this.switchSlide(0);
    }

    switchSlide(slideInd) {
        if(slideInd < 0) {
            slideInd = this.slides.length - 1;
        }else if(slideInd >= this.slides.length) {
            slideInd = 0;
        }
        let prevSlide = this.slides[this.currentSlide];
        prevSlide.style.display = 'none';
     

        let nextSlide = this.slides[slideInd];
        nextSlide.style.display = 'block';

        this.currentSlide = slideInd;
    }

}

class Toggler {

    constructor(togglerId) {
        this.currentToggle = 0;
        this.toggles = document.getElementById(togglerId).querySelectorAll('.car-toogle');
        this.setActive(0);
    }

    setActive(toogleInd) {
       
        this.toggles[this.currentToggle].style.transform = 'scale(1)';
        this.toggles[toogleInd].style.transform = 'scale(1.1)';
        this.currentToggle = toogleInd;
    }
}

const slides = new Slides('car-1-cont');
const toggler = new Toggler('car-1-toggler');

const carouselLeftArrow = document.getElementById('car-1-larrow');
const carouselRightArrow = document.getElementById('car-1-rarrow');

for (let i = 0; i < toggler.toggles.length; i++) {
    let toggle = toggler.toggles[i];
    toggle.onclick = () => {
        slides.switchSlide(i);
        toggler.setActive(i);
    }
}

carouselLeftArrow.onclick = () => {
    slides.switchSlide(slides.currentSlide - 1);
    toggler.setActive(slides.currentSlide);
};
carouselRightArrow.onclick = () => {
    slides.switchSlide(slides.currentSlide + 1);
    toggler.setActive(slides.currentSlide);
};

