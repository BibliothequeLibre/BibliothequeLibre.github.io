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
            .catch(responseJson => {
                console.log("Could not get response from url:", responseJson);
                return {values: ["shifted"]};
            })
            .then(this.parseData);
    }

    private parseData(response: ApiResponse): Promise<Array<Book>> {
        let booksResponse = response.values;
        // we don't want the csv headers, pop first item
        booksResponse.shift();
        // I don't wanna fight over typing for now
        // @ts-ignore
        return booksResponse.map((row) => ({
            docType: row[0],
            category: row[1],
            isbn: ""+ row[2],
            title: row[3],
            author: row[4],
            year: row[5],
            editions: row[6],
        }))
    }

    public async getAndParseBooks() {
        return await this.getSheetData();
    }
}