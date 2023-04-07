(()=>{var a=class{url;constructor(e){this.url=e}getSheetData(){return fetch(this.url).then(e=>e.json()).then(this.parseData)}parseData(e){let t=e.values;return t.pop(),t.map(r=>({isbn:r[0],title:r[1],author:r[2],year:r[3]}))}async getAndParseBooks(){return await this.getSheetData()}};var l="https://script.google.com/macros/s/AKfycbzBWJ74xhT8Dk7adHsYwCIRjZbWCYu8uYKNWYPFjE6GyS_ejJP5HTj-Uz-1AyAidABZ/exec";var o=class{constructor(){}fillElement(e,t){e.innerHTML=this.generateTable(t)}generateTableRow(e){return`<tr>
      <th scope="row">${e.isbn}</th>
      <td>${e.author}</td>
      <td>${e.title}</td>
      <td>${e.year}</td>
    </tr>`}generateTableElement(e){return`
        <table class="table table-striped table-sm table-hover">
  <thead>
    <tr>
      <th scope="col">ISBN</th>
      <th scope="col">Auteur</th>
      <th scope="col">Titre</th>
      <th scope="col">Ann\xE9e</th>
    </tr>
  </thead>
  <tbody>
  ${e}
  </tbody>
</table>
        `}generateTable(e){let t=e.map(this.generateTableRow);return this.generateTableElement(t.join(""))}};async function n(){let e=await new a(l).getAndParseBooks();new o().fillElement(document.getElementById("books-div"),e)}n();})();
