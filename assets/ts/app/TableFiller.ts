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
                {data: "docType"},
                {data: "category"},
                {data: "isbn"},
                {data: "title", width: "30em"},
                {data: "author"},
                {data: "year"},
                {data: "editions"},
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
                  <th scope="col">Type de doc</th>
                  <th scope="col">Catégorie</th>
                  <th scope="col">ISBN</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Auteuricexs</th>
                  <th scope="col">Années</th>
                  <th scope="col">Maisons d'édition</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
        `
    }
}