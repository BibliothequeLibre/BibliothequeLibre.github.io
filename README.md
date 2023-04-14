# README
[![build and push to gh-pages](https://github.com/BibliothequeLibre/BibliothequeLibre.github.io/actions/workflows/deploy.yaml/badge.svg)](https://github.com/BibliothequeLibre/BibliothequeLibre.github.io/actions/workflows/deploy.yaml)
[![pages-build-deployment](https://github.com/BibliothequeLibre/BibliothequeLibre.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/BibliothequeLibre/BibliothequeLibre.github.io/actions/workflows/pages/pages-build-deployment)

## Content Management

### Github Organisation

You must be added as a contributor in the BibliothequeLibre organisation on Github in order to edit the website.
> TODO: process to add contributors

### Editing text content

To edit text content, go to the [`content`](content) folder. There are currently 3 files in there:

- [`_index.md`](content/_index.md):
    - The "Accueil" page
- [`agenda.md`](content/agenda.md):
  - The "Agenda" page
- [`acces.md`](content/acces.md):
  - The "Accès" page
- [`photos-archives.md`](content/photos-archives.md):
    - The "Photos et Archives" page
- [`livres.md`](content/livres.md):
    - The "Livres" page. You can freely edit the content of this file but keep in mind that the list of books is
      automatically added at the bottom.

All of those files are in Markdown format. You can have a look at the [Dillinger](https://dillinger.io/) website to
understand how the formatting works.

To edit the text, go to the file in question, hit "edit" (the pen icon) and edit your file. You can use the "Preview"
tab to show the changes in a prettier way. Then, select "Create a new branch for this commit and start a pull request".
You should add a Commit message and some details if necessary:
![img.png](readme-images/edit-text.png)

You can then hit "Create pull request". Wait for a bit until you get a greenlight from the automated checks:
![img.png](readme-images/pr-ok.png).

You can then hit "Merge pull request".

On paper, you could also ask for reviews from other team members before merging the pull request so that multiple people
confirm they are OK with your changes.

One key thing to keep in mind is that you should always have the following code at the top of your content pages:
```yaml
---
title: "Accès"
---
```
It will be used as the title of the page and as the "tab name" in your browser. Do not remove the extra `type: livres` at
the top of the `content/livres.md` file as it is needed to automatically search for the available books. :)

> TODO: process to add images :)
> broadly: add image into `static/images/` folder, add `{{< image source="NAME_OF_YOUR_IMAGE_FILE" >}}` where you want your
> image to pop and that's it. If you want to make multiple changes at once (for example, adding an image and linking it 
> from a Markdown file) you should create a new branch (i.e. when you edit the text), then add a new image to that branch, 
> and finally open and merge the Pull Request.

### Adding and removing tabs
A list of the tabs is located in [`config.toml`](config.toml):
```toml
[menu]
[[menu.main]]
# name of the tab
name = "Accueil"
# mapped to content/_index.md
url = "/"
# order of the tab
weight = 1
[[menu.main]]
name = "Agenda"
# mapped to content/agenda.md
url = "/agenda/"
weight = 2
[[menu.main]]
name = "Livres"
# mapped to content/livres.md
url = "/livres/"
weight = 3
[[menu.main]]
name = "Accès"
# mapped to content/acces.md
url = "/acces/"
weight = 4
[[menu.main]]
name = "Photos et archives"
# mapped to content/photos-archives.md
url = "/photos-archives/"
weight = 5
```
- Each `[[menu.main]]` item is the configuration for a tab.
- The `name` property is the name of the tab as it appears at the top of the navigation bar of the website.
- The `url` property is the link of the tab - it should reflect the name of the file located in the `content` folder.
- The `weight` property is the order of the tab.

You can freely remove/edit the `[[menu.main]]` items to change the look and feel of the website. However, we currently
don't have a site map for our users, which means that a page that does not appear in a tab won't be accessible to the 
users unless it is referenced in another page, or they know the link to it.

## Dev stuff

### Hugo

Version: 0.111.3 - To be changed in the workflow tasks eventually. Install Hugo and then run `hugo server` for local
development.

In order to inject some logic only on the `/livres` page, `type: livres` is set in the front matter of the `livres.md`
file and a new `layouts/livres/single.html` file was created.

### Favicons

On [favicon.io](https://favicon.io/favicon-generator):

- Generate from Text
    - Text: BL
    - Background: Rounded
    - Font Family: Roboto
    - Font Variant: Black 900 Normal
    - Font Size: 73
- Follow install steps on website

### Google Sheets Proxy

A Google Sheet containing the book inventory was created within the Bibliotheque Libre's Google Account.
To access it programmatically, you sadly need to use an API Key. To avoid that, a Google Script, deployed as a Web Application
has been deployed. The script acts as the Bibliothèque Libre Google user, but can be called from anywhere on the Web
without any credentials. The Sheet does not have to be public.

With the help
of [this post](https://stackoverflow.com/questions/62732791/get-data-from-google-sheets-without-sheets-api),
create a new [Google App Script](https://script.new), deploy it as a Web Application, make it accessible to the public
and act in your name.

Use the following code to map it to your Google Sheet:

```js
function doGet(e) {
    const id = "SHEET_ID";
    const sheetName = "SHEET_NAME";
    const sheet = SpreadsheetApp.openById(id).getSheetByName(sheetName);
    const values = sheet.getDataRange().getValues();
    return ContentService.createTextOutput(JSON.stringify({values: values})).setMimeType(ContentService.MimeType.JSON);
}
```

Then paste the URL of your WebApp to [`config.ts`](assets/ts/app/config.ts).
> Note: the structure of the google sheet should match the processing logic inside `SheetParser.ts`