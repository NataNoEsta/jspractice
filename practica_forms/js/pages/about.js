import DATA from '../data/data.js'
import fetchdata from '../utils/utils.js'
const articlemain = document.getElementById("article-main");
const div = document.createElement('div')
div.className = "article-sub"
articlemain.append(div)


fetchdata(DATA)
const datos = DATA

function templateimgs(el) {
   return `<div class="articulo">
            <img src=${el.src} alt=${el.alt} />
            <div><a class=${el.category} id=${el.id}+${el.category} onclick="" >${el.category}</a></div>
         </div>`
}
div.innerHTML = `
               ${datos.map(templateimgs).join('')}`


