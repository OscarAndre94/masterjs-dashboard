//Cambiar tema
let themeGreen = document.querySelector(".theme__green");
let themeRed = document.querySelector(".theme__red");
let themeBlue = document.querySelector(".theme__blue");

let page = document.querySelector("html");

themeGreen.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__green--active")
});

themeRed.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__red--active")
});

themeBlue.addEventListener("click", () => {
    page.removeAttribute("class");
    page.classList.add("theme__blue--active")
});

import { ComponenteWeb } from "./ComponenteWeb.js";

export class TemaComponente extends ComponenteWeb {
    constructor(selectorContenedor) {
        super(selectorContenedor);
    }

    renderizar() {
        if (!this.contenedor) {
            console.warn(`No se encontró el contenedor de temas: ${this.selector}`);
            return;
        }

        const temaGuardado = localStorage.getItem("theme-dashboard");
        if (temaGuardado) {
            const pagina = document.querySelector("html");
            pagina.removeAttribute("class");
            pagina.classList.add(temaGuardado);
        }
    }

    conectarEventos() {
        if (!this.contenedor) return;

        let themeGreen = this.contenedor.querySelector(".theme_green");
        let themeRed = this.contenedor.querySelector(".theme_red");
        let themeBlue = this.contenedor.querySelector(".theme_blue");

        let page = document.querySelector("html");

        if (themeGreen) {
            themeGreen.addEventListener("click", () => {
                page.removeAttribute("class");
                page.classList.add("theme__green--active");
                
            });
        }

        if (themeRed) {
            themeRed.addEventListener("click", () => {
                page.removeAttribute("class");
                page.classList.add("theme__red--active");
                
            });
        }

        if (themeBlue) {
            themeBlue.addEventListener("click", () => {
                page.removeAttribute("class");
                page.classList.add("theme__blue--active");
                
            });
        }
    }
}