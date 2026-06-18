export class ComponenteWeb{
    constructor(selectorContenedor){
        this.contenedor = document.querySelector(selectorContenedor);

        if (!this.contenedor) {
            console.warn(`No se encontró el contenedor: ${selectorContenedor}`);
        }
    }

    inicializar() {
        this.renderizar();
        this.conectarEventos();
    }

    renderizar(){

    }

    conectarEventos(){
        
    }
}