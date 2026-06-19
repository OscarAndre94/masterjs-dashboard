import { ComponenteWeb } from "./ComponenteWeb.js";

export class ClockComponente extends ComponenteWeb {
    constructor(selectorContenedor) {
        super(selectorContenedor); 
    }

   renderizar() {
        if (!this.contenedor) {
            console.warn(`No se encontró el contenedor del reloj: ${this.selector}`);
            return;
        }
    }

    conectarEventos() {
        if (!this.contenedor) return;
        const clockTime = this.contenedor.querySelector(".clock__time");
        const clockDate = this.contenedor.querySelector(".clock__date");

        const actualizarReloj = () => {
            let myDate = new Date();
            let hours = String(myDate.getHours()).padStart(2, "0");
            let mins = String(myDate.getMinutes()).padStart(2, "0");
            let sec = String(myDate.getSeconds()).padStart(2, "0");

            if (clockTime) {
                clockTime.innerHTML = `${hours}:${mins}:${sec}`;
            }

            if (clockDate) {
                const opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
                clockDate.innerHTML = myDate.toLocaleDateString('es-ES', opciones).toUpperCase();
            }
        };

        actualizarReloj();

        setInterval(actualizarReloj, 1000);
    }
}

