import { dataBaseCity } from "./mixins.js"
let container = document.querySelector('.container');
let params = new URLSearchParams(location.search)
let idCity = params.get('id-city')
// 
function findCity() {
    let cityFound = dataBaseCity.find(city => {
        return city.id == idCity
    })
    createElem(cityFound)
}
function createElem(cityFound) {
    container.innerHTML = `
        <div class="city">
            <span>همه شهرهای ${cityFound.city}</span>
            <input type="checkbox" class="all-city" />
        </div>`;
    // class="all-citys"
    cityFound.subCity.forEach(city => {
        container.insertAdjacentHTML('beforeend', `
        <div class="city" >
            <span>${city}</span>
            <input type="checkbox" class="input-city"/>
        </div>`);
    });
}

function asd() {
    if (allCityElem.checked) {
        // let allCityElem = document.querySelector('.all-citys');
        // console.log(allCityElem.checked);
        let allInputs = document.querySelectorAll('.input-city')
        allInputs.forEach(function (e) {
            e.checked = true
            console.log(e.checked);
        });
    }
}

findCity()