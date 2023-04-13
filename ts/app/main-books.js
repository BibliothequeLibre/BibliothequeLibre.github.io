(()=>{var s=class{url;constructor(t){this.url=t}getSheetData(){return fetch(this.url).then(t=>t.json()).then(this.parseData)}parseData(t){let r=t.values;return r.shift(),r.map(e=>({isbn:e[0],title:e[1],author:e[2],publishingDate:e[3],theme:e[4],trigger:e[5],status:e[6],lendingDate:e[7].split("T")[0]}))}async getAndParseBooks(){return await this.getSheetData()}};var i="https://script.google.com/macros/s/AKfycbzBWJ74xhT8Dk7adHsYwCIRjZbWCYu8uYKNWYPFjE6GyS_ejJP5HTj-Uz-1AyAidABZ/exec";var l=class{constructor(){}fillElement(t,r){t.innerHTML=this.generateTableElement();let e=new DataTable("#book-table",{data:r.map(a=>[a.isbn,a.title,a.author,a.publishingDate,a.theme,a.trigger,a.status,a.lendingDate]),language:{url:"https://cdn.datatables.net/plug-ins/1.13.4/i18n/fr-FR.json"}})}generateTableElement(){return`
            <table id="book-table" class="table table-striped table-sm table-hover">
              <thead>
                <tr>
                  <th scope="col">Cote</th>
                  <th scope="col">Auteur&middot;trice</th>
                  <th scope="col">Titre</th>
                  <th scope="col">Date de publication</th>
                  <th scope="col">Th\xE8me</th>
                  <th scope="col">Trigger</th>
                  <th scope="col">Status</th>
                  <th scope="col">Date d'emprunt</th>
                </tr>
              </thead>
              <tbody>
              </tbody>
            </table>
        `}};async function n(){let t=await new s(i).getAndParseBooks();new l().fillElement(document.getElementById("books-div"),t)}n();})();
