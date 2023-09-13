import { advertisements as posters } from "./DataBase.js"
let postersContainer = document.querySelector('.posters-container');
postersContainer.innerHTML = '';
// 
let nameBranchFilter=document.querySelector('.name-branch-filter');
let params = new URLSearchParams(location.search)
let getBranche = params.get('branche')
let groupingChosenSubset = getBranche.replaceAll('-', ' ')
nameBranchFilter.innerHTML = groupingChosenSubset;
// ! function
function filterposters() {
    let posterFiltered = posters.filter(function (info) {
        return info.branche === groupingChosenSubset || info.mainBranche === groupingChosenSubset
    });
    createposters(posterFiltered)
}

function createposters(poster) {
    poster.forEach(function (info) {
        postersContainer.insertAdjacentHTML('afterbegin', `
            <div class="poster">
                <div class="specifications">
                    <p class="title-poster">${info.title}</p>
                    <div>
                        <p class="price">${info.price}</p>
                        <p class="date">1 ساعت پیش</p>
                    </div>
                </div>
                <div class="image-poster">
                    <img src="${info.mainImageSrc}" />
                </div>
            </div>`);
    });
}
filterposters()
// 
// 
// 
// let filterBtn=document.querySelector('.filter-btn');
// function filter(){}
// filterBtn.addEventListener('click',filter);