(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>o});var r=n(645),a=n.n(r)()((function(t){return t[1]}));a.push([t.id,"/* @font-face {\n    font-family: 'MyFont';\n    src: url('./my-font.woff2') format('woff2'),\n        url('./my-font.woff') format('woff');\n    font-weight: 600;\n    font-style: normal;\n} */\nbody {\n  background-color: bisque;\n  justify-content: center;\n}\n\n.title {\n  color: red;\n\n  /* font-family: 'MyFont'; */\n  text-align: center;\n  width: 100%;\n}\n\n.mainapp {\n  margin-left: auto;\n  margin-right: auto;\n  width: 500px;\n  border: 5px;\n  border-color: black;\n  border-radius: 0%;\n  border-style: dashed;\n}\n\n.editButtonsDiv {\n  margin-left: auto;\n  margin-right: 20px;\n}\n\n#editForm {\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.589);\n}\n\n#newItemTitle {\n  width: 98%;\n}\n\n.buttondivs > * {\n  width: 100%;\n  align-items: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.todo-item {\n  margin-top: 10px;\n  text-align: left;\n  color: black;\n  padding-left: 30px;\n  display: flex;\n}\n\n.todo-title {\n  color: black;\n}\n\ni {\n  padding-left: 30px;\n}\n",""]);const o=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var d=0;d<t.length;d++){var s=[].concat(t[d]);r&&a[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},i=[],d=0;d<t.length;d++){var s=t[d],c=r.base?s[0]+r.base:s[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var m=n(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==m?(e[m].references++,e[m].updater(p)):e.push({identifier:u,updater:a(p,r),references:1}),i.push(u)}return i}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var d=n(o[i]);e[d].references--}for(var s=r(t,a),c=0;c<o.length;c++){var l=n(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r=n.css,a=n.media,o=n.sourceMap;a?t.setAttribute("media",a):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(795),a=n.n(r),o=n(569),i=n.n(o),d=n(565),s=n.n(d),c=n(216),l=n.n(c),u=n(589),m=n.n(u),p=n(426),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),e()(p.Z,f),p.Z&&p.Z.locals&&p.Z.locals;const v={initialStorageData:()=>JSON.parse(localStorage.getItem("todolist"))||[],retrievelist:()=>{const t=JSON.parse(localStorage.getItem("todolist"))||v.initialStorageData();return v.saveList(t,!1),t},saveList:(t,e)=>{localStorage.setItem("todolist",JSON.stringify(t)),e&&window.location.reload()}},g=v;let h;const b={dragStart(t){this.style.opacity="0.4",h=this,t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",this.innerHTML),t.dataTransfer.setData("html",this.outerHTML)},dragEnter(){this.classList.add("over")},dragLeave(t){t.stopPropagation(),this.classList.remove("over")},dragOver:t=>(t.preventDefault(),t.dataTransfer.dropEffect="move",!1),dragDrop(t){return h!==this&&(h.innerHTML=this.innerHTML,h.outerHTML=this.outerHTML,this.innerHTML=t.dataTransfer.getData("text/html"),this.outerHTML=t.dataTransfer.getData("html")),!1},dragEnd(){const t=document.querySelectorAll(".draggable");[].forEach.call(t,(t=>{t.classList.remove("over")})),function(){const t=document.getElementsByTagName("li"),e=[];for(let n=0;n<t.length;n+=1){const r={},a=t[n].textContent;r.description=a;const o=t[n].getAttribute("index");r.index=o;const i=t[n].getAttribute("completed");"true"===String(i)?r.completed=!0:r.completed=!1,e.push(r)}g.saveList(e,!0)}(),this.style.opacity="1"}},L=t=>{const e=g.retrievelist(),n=e[t];!0===n.completed?n.completed=!1:n.completed=!0,e[t]=n,g.saveList(e,!0)},y=t=>{const e=g.retrievelist(),n={};n.description=t,n.completed=!1,n.index=e.length,e.push(n),g.saveList(e,!0)},E=t=>{const e=g.retrievelist();e.splice(t,1),g.saveList(e,!0)},x=(t,e)=>{const n=g.retrievelist(),r=n[e];r.description=t,n[e]=r,g.saveList(n,!0)},T=()=>{const t=g.retrievelist();for(let e=0;e<t.length;e+=1)!0===t[e].completed&&(t.splice(e,1),e-=1);g.saveList(t,!0)};function w(t,e){if(t){const t=document.getElementById("editForm");t.classList.add("w-100"),t.classList.add("h-100"),t.classList.add("text-center"),t.innerHTML="<form action='' class='form  text-center w-100 h-100 m-auto'><br><div class='title-border-top'></div><h2 class='add-book-title text-white'>Edit description</h2><br><input type='text' name='title' id='title' placeholder='Title'><br><br><div class='form-btn'> <button type='submit' class='text-center ' id='add-button'>Change</button></div></form>",document.getElementById("add-button").addEventListener("click",(()=>{const t=document.getElementById("title").value;x(t,e),w(!1)}))}else document.getElementById("editForm").innerHTML=""}const M=document.getElementById("newItemTitle");document.getElementById("newItemButton").addEventListener("click",(()=>{y(M.value)})),document.getElementById("removeCompletedButton").addEventListener("click",(()=>{T()})),document.getElementById("todo-list").appendChild(function(){const t=g.retrievelist(),e=document.createElement("div");return e.classList.add("todolist"),t.forEach(((n,r)=>{n.index=r+1,t[r]=n;const a=document.createElement("li");a.classList.add("todo-item"),a.classList.add("dropzone");const o=document.createElement("p");o.classList.add("todo-title"),o.textContent=n.description;const i=document.createElement("input");i.type="checkbox",i.name="completed",i.value="value",i.id="id",n.completed&&(i.checked=!0),i.addEventListener("change",(()=>{L(r)})),o.appendChild(i);const d=document.createAttribute("index");d.value=n.index,a.setAttributeNode(d);const s=document.createAttribute("completed");s.value=n.completed,a.setAttributeNode(s);const c=document.createAttribute("draggable");var l;c.value="true",a.classList.add("draggable"),a.setAttributeNode(c),(l=a).addEventListener("dragstart",b.dragStart,!1),l.addEventListener("dragenter",b.dragEnter,!1),l.addEventListener("dragover",b.dragOver,!1),l.addEventListener("dragleave",b.dragLeave,!1),l.addEventListener("drop",b.dragDrop,!1),l.addEventListener("dragend",b.dragEnd,!1);const u=document.createElement("div");u.classList.add("editButtonsDiv");const m=document.createElement("button");m.classList.add("deleteButton"),m.innerHTML='<i class="fas fa-trash-alt"></i>',m.addEventListener("click",(()=>{E(r)}));const p=document.createElement("button");p.classList.add("editButton"),p.innerHTML='<i class="fas fa-edit"></i>',p.addEventListener("click",(()=>{w(!0,r)})),u.appendChild(p),u.appendChild(m),a.appendChild(o),a.appendChild(u),e.appendChild(a)})),g.saveList(t,!1),e}()),w(!1)})()})();