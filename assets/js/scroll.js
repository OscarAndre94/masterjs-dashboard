import { ComponenteWeb } from "./ComponenteWeb.js";

export class ScrollTopComponente extends ComponenteWeb {
    constructor(selectorContenedor) {
        super(selectorContenedor);
    }

renderizar() {}

conectarEventos() {
        if (!this.contenedor) return;

        this.contenedor.addEventListener("click", (e) => {
            e.preventDefault();
            
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
                });
        });

       
    }
}