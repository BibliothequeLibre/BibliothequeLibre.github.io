(()=>{var a=class{url;constructor(t){this.url=t}getSheetData(){return fetch(this.url).then(t=>t.json()).catch(t=>(console.log("Could not get response from url:",t),{values:["shifted"]})).then(this.parseData)}parseData(t){let r=t.values;return r.shift(),r.map(e=>({isbn:e[0],title:e[1],author:e[2],publishingDate:e[3],theme:e[4],trigger:e[5],status:e[6],lendingDate:e[7].split("T")[0]}))}async getAndParseBooks(){return await this.getSheetData()}};var o="https://script.google.com/macros/s/AKfycbwH8daIpK6TD7-kqrF-0rgsgU9LzGceIsebvGWnbesVGDx2rwN5hH7CZNP1cyUXpVu0tg/exec";var s=class{constructor(){}fillElement(t,r){if(r.length==0){t.innerHTML=this.generateWarningMessageIfEmptyBooks();return}t.innerHTML=this.generateTableElement(),new DataTable("#book-table",{data:r.map(e=>[e.isbn,e.title,e.author,e.publishingDate,e.theme,e.trigger,e.status,e.lendingDate]),language:{url:"https://cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json"}})}generateWarningMessageIfEmptyBooks(){return`<div class="alert alert-warning" role="alert">
                Aucun livre n'a \xE9t\xE9 trouv\xE9. Activez Javascript et assurez vous que vous n'avez pas
                d'extensions de navigateurs qui bloquent l'acc\xE8s a Google Scripts (par exemple avec Firefox: 'Privacy Badger' ou
                'DuckDuckGo Privacy Extensions'). Si en changeant vos param\xE8tres l'erreur persiste, merci de contacter
                la personne responsable.
                </div>`}generateTableElement(){return`
            <table id="book-table" class="table table-striped table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">Cote</th>
                  <th scope="col">Auteur&middot;trice</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Date de publication</th>
                  <th scope="col">Th\xE9matique</th>
                  <th scope="col">Trigger</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date d'emprunt</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
        `}};async function i(){let t=await new a(o).getAndParseBooks();new s().fillElement(document.getElementById("books-div"),t)}i();})();
