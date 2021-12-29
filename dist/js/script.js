import renderSkills from"./skills.js";import renderProjects from"./projects.js";const skills=[{listItemClass:"skills__item--html",header:"HTML",skillsLevel:[1,1,1,0]},{listItemClass:"skills__item--css",header:"CSS",skillsLevel:[1,1,1,0]},{listItemClass:"skills__item--js",header:"JS",skillsLevel:[1,1,.5,0]},{listItemClass:"skills__item--sass",header:"SASS",skillsLevel:[1,1,0,0]},{listItemClass:"skills__item--ts",header:"TS",skillsLevel:[1,1,0,0]},{listItemClass:"skills__item--gulp",header:"GULP",skillsLevel:[1,.5,0,0]},{listItemClass:"skills__item--java",header:"Java",skillsLevel:[1,.5,0,0]},{listItemClass:"skills__item--git",header:"Git",skillsLevel:[1,1,0,0]},{listItemClass:"skills__item--ps",header:"Photoshop",skillsLevel:[1,1,1,0]},{listItemClass:"skills__item--react",header:"React",skillsLevel:[.5,0,0,0]}];renderSkills(skills);const projects=[{link:"https://artemd25.github.io/di-gi/",spanTitle:"Di-Gi web-site",spanEm:"(HTML/CSS/JS)"},{link:"https://github.com/ArtemD25/DFS-silhouette-finder",spanTitle:"Depth-first search of image silhouettes",spanEm:"(Java)"},{link:"https://github.com/ArtemD25/BFS-silhouette-finder",spanTitle:"Breadth-first search of image silhouettes",spanEm:"(Java)"},{link:"https://artemd25.github.io/level_1-2/",spanTitle:"Mastering skills working with JS",spanEm:"(HTML/CSS/JS)"},{link:"https://artemd25.github.io/level_1-3/",spanTitle:"Making and rendering tables based on data from an object",spanEm:"(HTML/CSS/JS)"},{link:"https://artemd25.github.io/level_1-4/",spanTitle:"Working with server - HTTP (GET, POST, DELETE)",spanEm:"(HTML/CSS/JS)"},{link:"https://github.com/ArtemD25/Huffman_archiver",spanTitle:"Huffman-algorithm archiver",spanEm:"(Java)"},{link:"https://github.com/ArtemD25/java_collections_p1",spanTitle:"Java collections (ArrayList, LinkedList, Stack and Queue)",spanEm:"(Java)"},{link:"https://github.com/ArtemD25/java_collections_p2",spanTitle:"Java collection (Priority Queue) & HashMap",spanEm:"(Java)"},{link:"https://github.com/ArtemD25/formula_calculator",spanTitle:"Formula calculator",spanEm:"(Java)"}];renderProjects(projects);