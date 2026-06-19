import { SliderComponente } from "./slider.js"; // Conecta con el hijo
import { ArticlesComponente } from "./articles.js"; 
import { ScrollTopComponente } from "./scroll.js";
import { LoginComponente } from "./login.js";

document.addEventListener("DOMContentLoaded", () => {
    const miSlider = new SliderComponente(".layout__slider"); // Crea el objeto
    miSlider.inicializar(); // Inicializo y me comunico con el objeto del Padre

    //Inicializador de articulos
    const misArticulos = new ArticlesComponente(".layout__articles");
    misArticulos.inicializar();

    //Inicializador de evento Scroll
    const miScroll = new ScrollTopComponente(".footer__top"); 
    miScroll.inicializar();

    const miLogin = new LoginComponente(".layout__aside");
    miLogin.inicializar();
});