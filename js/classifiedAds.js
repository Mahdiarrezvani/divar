import { advertisements } from "./DataBase.js"
let adsContainer = document.querySelector('.ads');
adsContainer.innerHTML = '';
// 
let nameBranchFilter=document.querySelector('.name-branch-filter');
let params = new URLSearchParams(location.search)
let getBranche = params.get('branche')
let groupingChosenSubset = getBranche.replaceAll('-', ' ')
nameBranchFilter.innerHTML = groupingChosenSubset;
// ! function
function filterAdsBranche() {
    let itemsFiltered = advertisements.filter(function (info) {
        return info.branche === groupingChosenSubset || info.mainBranche === groupingChosenSubset
    });
    createAdsBranche(itemsFiltered)
}

function createAdsBranche(ads) {
    ads.forEach(function (info) {
        adsContainer.insertAdjacentHTML('afterbegin', `
            <div class="product">
                <div class="specifications">
                    <p class="title-product">${info.title}</p>
                    <div>
                        <p class="price">${info.price}</p>
                        <p class="date">asdas</p>
                    </div>
                </div>
                <div class="image-product">
                    <img src="${info.mainImageSrc}" />
                </div>
            </div>`);
    });
}
filterAdsBranche()
// 
// 
// 
// let filterBtn=document.querySelector('.filter-btn');
// function filter(){}
// filterBtn.addEventListener('click',filter);