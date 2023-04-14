import {Book} from "./types";

export class TableFiller {
    constructor() {
    }

    public fillElement(elementToFill: HTMLElement, books: Array<Book>) {
        elementToFill.innerHTML = this.generateTableElement();
        let table = new DataTable('#book-table', {
            data: books.map(book => [
                book.isbn,
                book.title,
                book.author,
                book.publishingDate,
                book.theme,
                book.trigger,
                book.status,
                book.lendingDate]),
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json',
            },
        });
    }

    private generateTableElement() {
        return `
            <table id="book-table" class="table table-striped table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">Cote</th>
                  <th scope="col">Auteur&middot;trice</th>
                  <th scope="col">Titre</th>
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