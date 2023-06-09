import {Book} from "./types";

export class TableFiller {
    constructor() {
    }

    public fillElement(elementToFill: HTMLElement, books: Array<Book>) {
        if (books.length == 0) {
            elementToFill.innerHTML = this.generateWarningMessageIfEmptyBooks();
            return;
        }
        elementToFill.innerHTML = this.generateTableElement();
        new DataTable('#book-table', {
            data: books,
            columns: [
                {data: "isbn"},
                {data: "title", width: "30em"},
                {data: "author"},
                {data: "publishingDate"},
                {data: "theme"},
                {data: "trigger"},
                {data: "status", render: (data, type, full, meta) => {
                        let className = data == "disponible" ? "bg-success" : "bg-danger";
                        return `<span class="badge ${className}">${data}</span>`
                    }},
                {data: "lendingDate"}
            ],
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json',
            },
        });
    }

    private generateWarningMessageIfEmptyBooks() {
        return `<div class="alert alert-warning" role="alert">
                Aucun livre n'a été trouvé. Activez Javascript et assurez vous que vous n'avez pas
                d'extensions de navigateurs qui bloquent l'accès a Google Scripts (par exemple 'Privacy Badger').
                Si en changeant vos paramètres l'erreur persiste, merci de contacter la personne responsable.
                </div>`;
    }

    private generateTableElement() {
        return `
            <table id="book-table" class="table table-striped table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">Cote</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Auteur&middot;trice</th>
                  <th scope="col">Date de publication</th>
                  <th scope="col">Thématique</th>
                  <th scope="col">Trigger</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date d'emprunt</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
        `
    }
}