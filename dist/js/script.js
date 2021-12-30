import renderSkills from"./skills.js";import renderProjects from"./projects.js";import renderContacts from"./contacts.js";document.addEventListener("click",t=>{t.target.classList.contains("disabled-link")&&t.preventDefault()});const skills=[{listItemClass:"skills__item--html",header:"HTML",skillsLevel:[1,1,1,0]},{listItemClass:"skills__item--css",header:"CSS",skillsLevel:[1,1,1,0]},{listItemClass:"skills__item--js",header:"JS",skillsLevel:[1,1,.5,0]},{listItemClass:"skills__item--sass",header:"SASS",skillsLevel:[1,1,0,0]},{listItemClass:"skills__item--ts",header:"TS",skillsLevel:[1,1,0,0]},{listItemClass:"skills__item--gulp",header:"GULP",skillsLevel:[1,.5,0,0]},{listItemClass:"skills__item--java",header:"Java",skillsLevel:[1,.5,0,0]},{listItemClass:"skills__item--git",header:"Git",skillsLevel:[1,1,0,0]},{listItemClass:"skills__item--ps",header:"Photoshop",skillsLevel:[1,1,1,0]},{listItemClass:"skills__item--react",header:"React",skillsLevel:[1,0,0,0]}];renderSkills(skills);const projects=[{repoLink:"https://github.com/ArtemD25/DFS-silhouette-finder",pagesLink:null,spanTitle:"Depth-first search of image silhouettes",spanEm:"(Java)"},{repoLink:"https://github.com/ArtemD25/BFS-silhouette-finder",pagesLink:null,spanTitle:"Breadth-first search of image silhouettes",spanEm:"(Java)"},{repoLink:"https://github.com/ArtemD25/Huffman_archiver",pagesLink:null,spanTitle:"Huffman-algorithm archiver",spanEm:"(Java)"},{repoLink:"https://github.com/ArtemD25/java_collections_p1",pagesLink:null,spanTitle:"Java collections (ArrayList, LinkedList, Stack and Queue)",spanEm:"(Java)"},{repoLink:"https://github.com/ArtemD25/java_collections_p2",pagesLink:null,spanTitle:"Java collection (Priority Queue) & HashMap",spanEm:"(Java)"},{repoLink:"https://github.com/ArtemD25/formula_calculator",pagesLink:null,spanTitle:"Formula calculator",spanEm:"(Java)"},{repoLink:"https://github.com/ArtemD25/level_1-2",pagesLink:"https://artemd25.github.io/level_1-2/",spanTitle:"Mastering skills working with JS",spanEm:"(HTML/CSS/JS)"},{repoLink:"https://github.com/ArtemD25/level_1-3",pagesLink:"https://artemd25.github.io/level_1-3/",spanTitle:"Making and rendering tables based on data from an object",spanEm:"(HTML/CSS/JS)"},{repoLink:"https://github.com/ArtemD25/level_1-4",pagesLink:"https://artemd25.github.io/level_1-4/",spanTitle:"Working with server - HTTP (GET, POST, DELETE)",spanEm:"(HTML/CSS/JS)"},{repoLink:"https://github.com/ArtemD25/ArtemD25.github.io",pagesLink:"https://artemd25.github.io/",spanTitle:"My CV-page",spanEm:"(HTML/CSS/JS)"},{repoLink:"https://github.com/ArtemD25/di-gi",pagesLink:"https://artemd25.github.io/di-gi/",spanTitle:"Di-Gi web-site",spanEm:"(HTML/CSS/JS)"},{repoLink:"https://github.com/ArtemD25/count_visited_links",pagesLink:"https://artemd25.github.io/count_visited_links/",spanTitle:"Links` visits counter",spanEm:"JS"},{repoLink:"https://github.com/ArtemD25/regexp_study",pagesLink:null,spanTitle:"Date & RegExp in JS",spanEm:"JS"},{repoLink:"https://github.com/ArtemD25/responsive_study",pagesLink:"https://artemd25.github.io/responsive_study/",spanTitle:"Making a responsive website",spanEm:"(HTML/CSS)"},{repoLink:"https://github.com/ArtemD25/bootstrap_study",pagesLink:"https://artemd25.github.io/bootstrap_study/",spanTitle:"Making a responsive website using Bootstrap",spanEm:"Bootstrap"},{repoLink:"https://github.com/ArtemD25/flexbox_study",pagesLink:"https://artemd25.github.io/flexbox_study/",spanTitle:"Making a responsive website using Flexbox",spanEm:"(HTML/CSS)"},{repoLink:"https://github.com/ArtemD25/grid_study",pagesLink:"https://artemd25.github.io/grid_study/",spanTitle:"Making a responsive website using Grid",spanEm:"(HTML/CSS)"},{repoLink:"https://github.com/ArtemD25/oop_study",pagesLink:null,spanTitle:"Mastering OOP in JS (ES5)",spanEm:"JS"},{repoLink:"https://github.com/ArtemD25/ajax_study",pagesLink:"https://artemd25.github.io/ajax_study/",spanTitle:"AJAX (yup, again)",spanEm:"(HTML/CSS/JS)"},{repoLink:"https://github.com/ArtemD25/jquery_study",pagesLink:"https://artemd25.github.io/jquery_study",spanTitle:"Making an online-calculator using JQuery",spanEm:"JQuery"},{repoLink:"https://github.com/ArtemD25/webpack_study",pagesLink:"https://artemd25.github.io/webpack_study/",spanTitle:"Tic-tac-toe online game coded using webpack",spanEm:"Webpack"},{repoLink:"https://github.com/ArtemD25/patterns_study",pagesLink:null,spanTitle:"Patterns (State, Observer)",spanEm:"JS"},{repoLink:"https://github.com/ArtemD25/modules_study",pagesLink:"https://artemd25.github.io/modules_study/",spanTitle:"Twitter-like app (JS Modules)",spanEm:"JS"}];renderProjects(projects);const contacts=[{class:"contacts__link--email",textContent:"artemdavydenko25@gmail.com",href:"mailto:artemdavydenko25@gmail.com"},{class:"contacts__link--linkedin",textContent:"artem-davydenko-57b45a124/",href:"https://www.linkedin.com/in/artem-davydenko-57b45a124/"},{class:"contacts__link--facebook",textContent:"artemdavidenko",href:"https://www.facebook.com/artemdavidenko"},{class:"contacts__link--github",textContent:"ArtemD25",href:"https://github.com/ArtemD25"},{class:"contacts__link--phone",textContent:"+38 (063) 976 24 94",href:"tel:+380639762494"}];renderContacts(contacts);