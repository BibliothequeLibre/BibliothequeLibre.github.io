import {SheetParser} from "./SheetParser";
import {URL_BOOKS_PROXY} from "./config";
import {Book} from "./types";
import {TableFiller} from "./TableFiller";

async function main() {
    let parser = new SheetParser(URL_BOOKS_PROXY);
    let books: Array<Book> = await parser.getAndParseBooks();
    let tableFiller = new TableFiller();
    tableFiller.fillElement(document.getElementById("books-div"), books);
}

main();
