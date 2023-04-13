import {Book} from "./types";

export class TableFiller {
    constructor() {
    }

    public fillElement(elementToFill: HTMLElement, books: Array<Book>) {
        elementToFill.innerHTML = this.generateTable(books);
        let table = new DataTable('#book-table', {
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json',
            },
        });
    }

    private generateTableRow(book: Book): string {
        return `<tr>
      <th scope="row">${book.isbn}</th>
      <td>${book.author}</td>
      <td>${book.title}</td>
      <td>${book.publishingDate}</td>
      <td>${book.theme}</td>
      <td>${book.trigger}</td>
      <td>${book.status}</td>
      <td>${book.lendingDate}</td>
    </tr>`
    }

    private generateTableElement(tableContent: string) {
        return `
        <table id="book-table" class="table table-striped table-sm table-hover">
  <thead>
    <tr>
      <th scope="col">Cote</th>
      <th scope="col">Auteur&middot;trice</th>
      <th scope="col">Titre</th>
      <th scope="col">Date de publication</th>
      <th scope="col">Thème</th>
      <th scope="col">Trigger</th>
      <th scope="col">Status</th>
      <th scope="col">Date d'emprunt</th>
    </tr>
  </thead>
  <tbody>
  ${tableContent}
  </tbody>
</table>
        `
    }

    private generateTable(books: Array<Book>) {
        let tableRows = books.map(this.generateTableRow);
        return this.generateTableElement(tableRows.join(""))
    }
}