import { dataBaseCity } from './mixins.js'
function elementHandler() {
    let cityContainer = document.querySelector('.city-container');
    dataBaseCity.forEach(function (infoCity) {
        cityContainer.insertAdjacentHTML('beforeend', `
        <div class="city">
            <a href="showCity.html?id-city=${infoCity.id}">
                <span class="title">${infoCity.city}</span>
                <span>></span>
            </a>
        </div>`);
    });
}
elementHandler()