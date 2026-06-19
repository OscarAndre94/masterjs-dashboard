import { ComponenteWeb } from "./ComponenteWeb.js";
export class LoginComponente extends ComponenteWeb {
    constructor(selectorContenedor) {
        super(selectorContenedor);
    }

    renderizar() {
        if (!this.contenedor) return;

        //Elementos necesarios para validar la sesión dentro del contenedor 
        const loginForm = this.contenedor.querySelector(".aside__login");
        const asideData = this.contenedor.querySelector(".aside__data");
        const loginName = this.contenedor.querySelector(".data__name");

        if (!loginForm || !asideData) return;

        //Comprobar que todo este relleno
        let myUser = localStorage.getItem("user");

        if (myUser) {
            const identity = JSON.parse(myUser);

            //Mostrar usuario
            if (loginName) loginName.innerHTML = identity.name;

            loginForm.classList.add("aside__login--hide");
            asideData.classList.remove("aside__data--hide");
            } else {
                if (loginName) loginName.innerHTML = "";
                loginForm.classList.remove("aside__login--hide");
                asideData.classList.add("aside__data--hide");
        }
    }

    conectarEventos() {
        if (!this.contenedor) return;

        const loginForm = this.contenedor.querySelector(".aside__login");
        const btnLogout = this.contenedor.querySelector(".data__logout");

        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();

                const inputName = this.contenedor.querySelector("#name");
                const inputEmail = this.contenedor.querySelector("#email");
                const inputPass = this.contenedor.querySelector("#pass");

                 //Recoger los valores del formulario
                const name = inputName ? inputName.value : "";
                const email = inputEmail ? inputEmail.value : "";
                const password = inputPass ? inputPass.value : "";

                //Comprobar que este relleno el formulario
                if (name && email && password) {
                    const user = { name, email, password };

                     //Guardar en el LocalStorage
                    localStorage.setItem("user", JSON.stringify(user));
                    
                    //Vaciar el formulario
                    loginForm.reset();

                    this.renderizar();
                }
            });
        }

        if (btnLogout) {
            btnLogout.addEventListener("click", () => {
                localStorage.removeItem("user");

                this.renderizar();
            });
        }
    }
}
