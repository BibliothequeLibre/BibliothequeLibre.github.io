(()=>{var r=class{url;constructor(e){this.url=e}getSheetData(){return fetch(this.url).then(e=>e.json()).catch(e=>(console.log("Could not get response from url:",e),{values:["shifted"]})).then(this.parseData)}parseData(e){let a=e.values;return a.shift(),a.map(t=>({docType:t[0],category:t[1],isbn:""+t[2],title:t[3],author:t[4],year:t[5],editions:t[6]}))}async getAndParseBooks(){return await this.getSheetData()}};var n="https://script.google.com/macros/s/AKfycbzSZC8h1J5219wrKfMRrR3KHrdYLFDOPVUZxUrm-TAvhaPRQfVnBe2gGbGOV0jyLjzOuQ/exec";var o=class{constructor(){}fillElement(e,a){if(a.length==0){e.innerHTML=this.generateWarningMessageIfEmptyBooks();return}e.innerHTML=this.generateTableElement(),new DataTable("#book-table",{data:a,columns:[{data:"docType"},{data:"category"},{data:"isbn"},{data:"title",width:"30em"},{data:"author"},{data:"year"},{data:"editions"}],language:{url:"https://cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json"}})}generateWarningMessageIfEmptyBooks(){return`<div class="alert alert-warning" role="alert">
                Aucun livre n'a \xE9t\xE9 trouv\xE9. Activez Javascript et assurez vous que vous n'avez pas
                d'extensions de navigateurs qui bloquent l'acc\xE8s a Google Scripts (par exemple 'Privacy Badger').
                Si en changeant vos param\xE8tres l'erreur persiste, merci de contacter la personne responsable.
                </div>`}generateTableElement(){return`
            <table id="book-table" class="table table-striped table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">Type de doc</th>
                  <th scope="col">Cat\xE9gorie</th>
                  <th scope="col">ISBN</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Auteuricexs</th>
                  <th scope="col">Ann\xE9es</th>
                  <th scope="col">Maisons d'\xE9dition</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
        `}};async function i(){let e=await new r(n).getAndParseBooks();new o().fillElement(document.getElementById("books-div"),e)}i();})();
