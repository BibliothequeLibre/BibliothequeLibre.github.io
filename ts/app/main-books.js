(()=>{var r=class{url;constructor(e){this.url=e}getSheetData(){return fetch(this.url).then(e=>e.json()).catch(e=>(console.log("Could not get response from url:",e),{values:["shifted"]})).then(this.parseData)}parseData(e){let a=e.values;return a.shift(),a.map(t=>({isbn:t[0],title:t[1],author:t[2],publishingDate:t[3],theme:t[4],trigger:t[5],status:t[6],lendingDate:t[7].split("T")[0]}))}async getAndParseBooks(){return await this.getSheetData()}};var n="https://script.google.com/macros/s/AKfycbwH8daIpK6TD7-kqrF-0rgsgU9LzGceIsebvGWnbesVGDx2rwN5hH7CZNP1cyUXpVu0tg/exec";var s=class{constructor(){}fillElement(e,a){if(a.length==0){e.innerHTML=this.generateWarningMessageIfEmptyBooks();return}e.innerHTML=this.generateTableElement(),new DataTable("#book-table",{data:a,columns:[{data:"isbn"},{data:"title",width:"30em"},{data:"author"},{data:"publishingDate"},{data:"theme"},{data:"trigger"},{data:"status",render:(t,i,c,p)=>`<span class="badge ${t=="disponible"?"bg-success":"bg-danger"}">${t}</span>`},{data:"lendingDate"}],language:{url:"https://cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json"}})}generateWarningMessageIfEmptyBooks(){return`<div class="alert alert-warning" role="alert">
                Aucun livre n'a \xE9t\xE9 trouv\xE9. Activez Javascript et assurez vous que vous n'avez pas
                d'extensions de navigateurs qui bloquent l'acc\xE8s a Google Scripts (par exemple 'Privacy Badger').
                Si en changeant vos param\xE8tres l'erreur persiste, merci de contacter la personne responsable.
                </div>`}generateTableElement(){return`
            <table id="book-table" class="table table-striped table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">Cote</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Auteur&middot;trice</th>
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
        `}};async function l(){let e=await new r(n).getAndParseBooks();new s().fillElement(document.getElementById("books-div"),e)}l();})();