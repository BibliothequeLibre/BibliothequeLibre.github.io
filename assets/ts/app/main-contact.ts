import {URL_BOOKS_PROXY} from "./config";


function showLink(query: string, response: string) {
    const element = document.getElementById("link-" + query);
    if (element.innerHTML.indexOf("href") > 0) {
    } else {
        element.innerHTML += `<a href='${response}'>${response}</a>`
    }
}

function getLinkData(query: string) {
    return fetch(URL_BOOKS_PROXY + "?" + query)
        .then(response => response.json())
        .catch(responseJson => {
            console.log("Could not get response from url:", responseJson);
            return {values: ["shifted"]};
        })
        //.then(console.log)
        .then(response => showLink(query, response[query]));
}

async function clickMail() {
    getLinkData("mail");
}

async function clickTelegram() {
    getLinkData("telegram");
}

async function clickInstagram() {
    getLinkData("instagram");
}

async function main() {
    document.getElementById("link-mail").onclick = clickMail;
    document.getElementById("link-instagram").onclick = clickInstagram;
    document.getElementById("link-telegram").onclick = clickTelegram;
}

main();