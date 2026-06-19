import { ComponenteWeb } from "./ComponenteWeb.js";
import JustValidate from 'https://unpkg.com/just-validate@latest/dist/just-validate.es.js';

export class ContactoComponente extends ComponenteWeb {
    constructor(selectorContenedor) {
        super(selectorContenedor);
        this.validator = null;
    }

        renderizar() {
        if (!this.contenedor) {
            console.warn(`No se encontró el formulario de contacto: ${this.selector}`);
            return;
        }
    }

    conectarEventos() {
        if (!this.contenedor) return;
        this.validator = new JustValidate(this.contenedor);

        this.validator
            .addField("#contact__name", [
                {
                    rule: "required",
                    errorMessage: "El nombre es obligatorio" 
                },
                {
                    rule: "minLength",
                    value: 3,
                    errorMessage: "El nombre es muy corto" 
                },
                {
                    rule: "maxLength",
                    value: 15,
                    errorMessage: "El nombre es muy largo" 
                }
            ])
            .addField("#surname", [
                {
                    rule: "required",
                    errorMessage: "Los apellido son obligatorio" 
                },
                {
                    rule: "minLength",
                    value: 3,
                    errorMessage: "Los apellidos son muy cortos" 
                },
                {
                    rule: "maxLength",
                    value: 25,
                    errorMessage: "Los apellidos son muy largos" 
                }
            ])
            .addField("#contact__email", [
                {
                    rule: "required",
                    errorMessage: "El email es obligatorio" 
                },
                {
                    rule: "email",
                    errorMessage: "El email no es válido " 
                }
            ])
            .addField("#gender", [
                {
                    rule: "required",
                    errorMessage: "Selecciona un genero" 
                }
            ])
             .addField("#date", [
                {
                    rule: "required",
                    errorMessage: "La fecha es obligatorio" 
                }
            ])
             .addField("#years", [
                {
                    rule: "required",
                    errorMessage: "La edad es obligatoria" 
                },
                {
                    rule: "integer",
                    errorMessage: "Solo son validos los números"
                }
            ])
            .onSuccess((event) => {
                event.preventDefault();
               
                alert("Todo es valido");
                event.target.reset();
            });

      }
    }