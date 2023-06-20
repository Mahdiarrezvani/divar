import { dataBaseCity } from "./mixins.js"
let citysContainer = document.querySelector('.citys-container');
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
    citysContainer.innerHTML = `
        <div class="city">
            <span>همه شهرهای ${cityFound.city}</span>
            <input type="checkbox" class="all-citys" />
        </div>`;
    cityFound.subCity.forEach(city => {
        citysContainer.insertAdjacentHTML('beforeend', `
        <div class="city" >
            <span>${city}</span>
            <input type="checkbox" class="input-city"/>
        </div>`);
    });
    celectAllCitys();
}

function celectAllCitys() {
    let allCityInput = document.querySelector('.all-citys');
    let inputCityArray = document.querySelectorAll('.input-city');
    allCityInput.addEventListener('change', function (e) {
        if (e.target.checked) {
            inputCityArray.forEach(function (event) {
                event.checked = true;
            });
        } else {
            inputCityArray.forEach(function (event) {
                event.checked = false;
            });
        }
    });
}
findCity()