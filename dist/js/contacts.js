import createElem from"./createElem.js";const contactsList=document.querySelector("#contacts__items");export default function renderContacts(t){t.forEach(t=>contactsList.append(createContactItem(t)))}function createContactItem(t){const e=createElem("li",null,["contacts__item"]);t=createElem("a",null,["contacts__link","regular-link",t.class],t.textContent,{href:t.href,target:"_blank"});return e.append(t),e}