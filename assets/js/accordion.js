import { ComponenteWeb } from "./ComponenteWeb.js";

export class AccordionComponente extends ComponenteWeb {
    constructor(selectorContenedor) {
        super(selectorContenedor); 
    }

    renderizar() {
        if (!this.contenedor) {
            console.warn(`Contenedor del acordeón no encontrado: ${this.selectorContenedor}`);
            return;
        }
    }

    conectarEventos() {
        if (!this.contenedor) return;

        const collapses = this.contenedor.querySelectorAll(".accordion__collapse");

        collapses.forEach(collapse => {
            const header = collapse.querySelector(".collapse__header");

            if (header) {
                header.addEventListener("click", () => {
                    // --- COMPORTAMIENTO PREMIUM (Opcional pero recomendado) ---
                    // Si quieres que al abrir uno se cierren los demás, descomenta estas líneas:
                    /*
                    collapses.forEach(item => {
                        if (item !== collapse) {
                            item.classList.remove("accordion__collapse--open");
                        }
                    });
                    */

                    // Tu lógica original: intercambia la clase para abrir/cerrar
                    collapse.classList.toggle("accordion__collapse--open");
                });
            }
        });
    }
}
