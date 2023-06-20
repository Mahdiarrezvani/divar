import { advertisements } from "./mixins.js"
let adsContainer = document.querySelector('.ads');
adsContainer.innerHTML = '';
// 
let params = new URLSearchParams(location.search)
let getBranche = params.get('branche')
let arrayAdsBranche = []
let groupingChosenSubset = getBranche.replaceAll('-', ' ')

// ! function
function findAdsBranche() {
    advertisements.find(function (info) {
        if (info.branche === groupingChosenSubset) {
            arrayAdsBranche.push(info)
        }
    })
    createAdsBranche(arrayAdsBranche)
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
findAdsBranche()