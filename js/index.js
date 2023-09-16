import { branches, posters } from './DataBase.js';
const categoryContainer = document.querySelector('.catregory-container');
const postersContainer = document.querySelector('.posters-container');
branches.forEach(function (category) {
    let link = category.label.replace(" ", "-")
    categoryContainer.insertAdjacentHTML('beforeend', `
        <div class="catregory">
            <a href="grouping.html?type-grouping=${link}">
                <p class="icon"><iconify-icon icon="${category.icon}"></iconify-icon></p>
                <p class="title">${category.label}</p>
            </a>
        </div>`);
});
// باید تو میکسین نوشته شه چون جایه دیگم استفاده شده
posters.forEach(function (poster) {
    postersContainer.insertAdjacentHTML('afterbegin', `
        <div class="poster">
            <a href="showPoster.html?id=${poster.id}">
                <div class="specifications">
                    <p class="title-poster">${poster.title}</p>
                    <div>
                        <p class="price">${poster.price}</p>
                        <p class="date">1 ساعت پیش</p>
                    </div>
                </div>
                <div class="image-poster">
                    <img src="image/image.png" />
                </div>
            </a>
        </div>`);
});