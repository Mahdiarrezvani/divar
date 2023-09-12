import { advertisements } from "./DataBase.js"
let branche = document.querySelector('.branche');
let titleAd = document.querySelector('.name-ad');
let specification = document.querySelector('.specification');
let description = document.querySelector('.text-description');
// 
let params = new URLSearchParams(location.search)
let getId = params.get('id');
// ! Functions
function findAdChoesed() {
    let ad = advertisements.find(function (info) {
        return info.id == getId
    });
    asd(ad)
}
findAdChoesed()
function asd(ad) {
    branche.innerHTML = ad.branche;
    titleAd.innerHTML = ad.title;
    description.innerHTML = ad.description
    ad.specification.forEach(info => {
        specification.insertAdjacentHTML('beforeend', `
            <p><span class="title">${info.title}</span><span class="value">${info.value}</span></p>
        `);
    });
}