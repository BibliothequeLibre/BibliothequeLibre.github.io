import {Book} from "./types";

export class TableFiller {
    constructor() {
    }

    public fillElement(elementToFill: HTMLElement, books: Array<Book>) {
        elementToFill.innerHTML = this.generateTable(books);

    }

    private generateTableRow(book: Book): string {
        return `<tr>
      <th scope="row">${book.isbn}</th>
      <td>${book.author}</td>
      <td>${book.title}</td>
      <td>${book.year}</td>
    </tr>`
    }

    private generateTableElement(tableContent: string) {
        return `
        <table class="table table-striped table-sm table-hover">
  <thead>
    <tr>
      <th scope="col">ISBN</th>
      <th scope="col">Auteur</th>
      <th scope="col">Titre</th>
      <th scope="col">Année</th>
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