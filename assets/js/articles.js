import { ComponenteWeb } from "./ComponenteWeb.js";

export class ArticlesComponente extends ComponenteWeb {
    constructor(selectorContenedor) {
        super(selectorContenedor);

        this.posts = [
            {
                title: "Artículo 1",
                date: "30/12/2028",
                body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dicta quaerat eos eveniet corporis modi. Odit, pariatur corrupti numquam, consectetur magni mollitia eum omnis minus voluptatem voluptatibus cupiditate, blanditiis error?"
            },

            {
                title: "Artículo 2",
                date: "02/06/2028",
                body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dicta quaerat eos eveniet corporis modi. Odit, pariatur corrupti numquam, consectetur magni mollitia eum omnis minus voluptatem voluptatibus cupiditate, blanditiis error?"
            },

            {
                title: "Artículo 3",
                date: "25/07/2028",
                body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dicta quaerat eos eveniet corporis modi. Odit, pariatur corrupti numquam, consectetur magni mollitia eum omnis minus voluptatem voluptatibus cupiditate, blanditiis error?"
            },

            {
                title: "Artículo 4",
                date: "30/10/2028",
                body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores dicta quaerat eos eveniet corporis modi. Odit, pariatur corrupti numquam, consectetur magni mollitia eum omnis minus voluptatem voluptatibus cupiditate, blanditiis error?"
            },

            {
                title: "Aprendiendo Polimorfismo",
                date: "18/06/2026",
                body: "Proyecto práctico para emplear el polimorfismo y POO de manera dinámica y sencilla "
            }
        ];
    }

    renderizar() {
        if (!this.contenedor) return;
        this.contenedor.innerHTML = "";

        this.posts.forEach(article => {
            this.contenedor.innerHTML += `
                <article class="articles__article">
                    <h3 class="article__title">${article.title}</h3>
                    <span class="article__date">${article.date}</span>
                    <p class="article__body">
                        ${article.body}
                    </p>
                    <a href="#" class="article__btn">Leer más</a>
                </article>
            `;
        });
    }
    conectarEventos() {

    }
}
