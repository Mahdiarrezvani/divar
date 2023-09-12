import { dataBaseCity } from './DataBase.js'
function elementHandler() {
    let statesContainer = document.querySelector('.states-container');
    dataBaseCity.forEach(function (infoCity) {
        statesContainer.insertAdjacentHTML('beforeend', `
        <div class="state">
            <a href="showCity.html?id-city=${infoCity.id}">
                <span class="title">${infoCity.city}</span>
                <span>></span>
            </a>
        </div>`);
    });
}
elementHandler()