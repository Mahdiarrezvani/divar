import { posters } from "./DataBase.js"
let branche = document.querySelector('.branche');
let titleAd = document.querySelector('.name-poster');
let specification = document.querySelector('.specification');
let description = document.querySelector('.text-description');
let params = new URLSearchParams(location.search)
let getId = params.get('id');

function findAdChoesed() {
    let poster = posters.find(function (info) {
        return info.id == getId
    });
    CreateElemPoster(poster)
    console.log(poster);
}

function CreateElemPoster(poster) {
    branche.innerHTML = poster.branche;
    titleAd.innerHTML = poster.title;
    description.innerHTML = poster.description
    poster.specification.forEach(info => {
        specification.insertAdjacentHTML('beforeend', `
        <p><span class="title">${info.title}</span><span class="value">${info.value}</span></p>
        `);
    });
}

findAdChoesed()