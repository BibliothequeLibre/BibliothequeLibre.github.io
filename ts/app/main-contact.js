(()=>{var i="https://script.google.com/macros/s/AKfycbzSZC8h1J5219wrKfMRrR3KHrdYLFDOPVUZxUrm-TAvhaPRQfVnBe2gGbGOV0jyLjzOuQ/exec";function o(e,n){let c=document.getElementById("link-"+e);c.innerHTML.indexOf("href")>0||(c.innerHTML+=`<a href='${n}'>${n}</a>`)}function t(e){return fetch(i+"?"+e).then(n=>n.json()).catch(n=>(console.log("Could not get response from url:",n),{values:["shifted"]})).then(n=>o(e,n[e]))}async function l(){t("mail")}async function r(){t("telegram")}async function a(){t("instagram")}async function m(){document.getElementById("link-mail").onclick=l,document.getElementById("link-instagram").onclick=a,document.getElementById("link-telegram").onclick=r}m();})();
