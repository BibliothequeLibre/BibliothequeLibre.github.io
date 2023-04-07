import {Book} from "./types";

interface ApiResponse {
    values: Array<Array<string>>;
}

export class SheetParser {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    private getSheetData() {
        return fetch(this.url)
            .then(response => response.json())
            .then(this.parseData);
    }

    private parseData(response: ApiResponse): Promise<Array<Book>> {
        let booksResponse = response.values;
        // we don't want the csv headers, pop first item
        booksResponse.pop();
        // I don't wanna fight over typing for now
        // @ts-ignore
        return booksResponse.map((row) => ({isbn: row[0], title: row[1], author: row[2], year: row[3]}))
    }

    public async getAndParseBooks() {
        return await this.getSheetData();
    }
}