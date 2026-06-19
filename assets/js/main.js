import { SliderComponente } from "./slider.js"; // Conecta con el hijo
import { ArticlesComponente } from "./articles.js"; 
import { ScrollTopComponente } from "./scroll.js";
import { LoginComponente } from "./login.js";
import { AccordionComponente } from "./accordion.js";
import { ClockComponente } from "./clock.js";
import { ContactoComponente } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
    //Incializador de sliders
    if (document.querySelector(".layout__slider")) {
        const miSlider = new SliderComponente(".layout__slider"); 
        miSlider.inicializar(); 
    }

    //Inicializador de articulos
    if (document.querySelector(".layout__articles")) {
        const misArticulos = new ArticlesComponente(".layout__articles");
        misArticulos.inicializar();
    }

    //Inicializador de evento Scroll
    if(document.querySelector(".footer__top")){
        const miScroll = new ScrollTopComponente(".footer__top"); 
        miScroll.inicializar();
    }
    

    //Incializador de Login
    if (document.querySelector(".layout__aside")) {
        const miLogin = new LoginComponente(".layout__aside");
        miLogin.inicializar();
    }

    //Inicializador de Acordeón
    if (document.querySelector(".main__accordion")) {
        const miAcordeon = new AccordionComponente(".main__accordion");
        miAcordeon.inicializar();
    }

    //Inicializador de reloj
    if (document.querySelector(".main__clock")){
        const miReloj = new ClockComponente(".main__clock");
        miReloj.inicializar();
    }

    if(document.querySelector(".main__contact")){
        const miContacto = new ContactoComponente(".main__contact");
        miContacto.inicializar();
    }
});