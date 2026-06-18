import { ComponenteWeb } from "./ComponenteWeb.js";

export class SliderComponente extends ComponenteWeb{
    constructor(selectorContenedor) {
        super(selectorContenedor);
        
        this.counter = 0;
        this.allSlides = 0;
        this.slides = null;
    }

conectarEventos(){
    if(!this.contenedor) return;

    let btnPrev = this.contenedor.querySelector(".slider__btn-prev");
    let btnNext = this.contenedor.querySelector(".slider__btn-next");
    this.slides = this.contenedor.querySelectorAll(".slides__item");
    this.allSlides = this.slides.length;

    //Boton NEXT
    btnNext.addEventListener("click", () => {
        this.counter++;

        if(this.counter >= this.allSlides){
            this.counter = 0;
        }

        this.activeSlide(this.counter);
    });

     //Boton PREV 
    btnPrev.addEventListener("click", () => {
        this.counter--;

        if(this.counter < 0){
            this.counter = this.allSlides - 1;
        }

        this.activeSlide(this.counter);
    });
}

    //Activar slides
    activeSlide(index) {
        this.clearActives();
        if (this.slides[index]) {
            this.slides[index].classList.add("slides__item--active");
        }
    }

    //Limpiar slides activados
    clearActives() {
        this.slides.forEach(slide => {
            slide.classList.remove("slides__item--active");
        });
    }
 }

