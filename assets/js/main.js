import { SliderComponente } from "./slider.js"; // Conecta con el hijo

document.addEventListener("DOMContentLoaded", () => {
    const miSlider = new SliderComponente(".layout__slider"); // Crea el objeto
    miSlider.inicializar(); // Inicializo y me comunico con el objeto del Padre
});