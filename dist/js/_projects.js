import createElem from"./createElem.js";const projectsList=document.querySelector("#projects__items");export default function renderProjects(e){e.forEach(e=>projectsList.append(createProjectItem(e)))}function createProjectItem(e){const t=createElem("li",null,["project__item"]);var r=createElem("a",null,null,null,{href:e.link,target:"_blank"});const n=createElem("span",null,["projects__title"]);return n.innerHTML=`${e.spanTitle}<br><em>${e.spanEm}</em>`,t.append(r,n),t}