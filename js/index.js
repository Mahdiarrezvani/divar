import { branches, posters } from './DataBase.js';
const categoryContainer = document.querySelector('.catregory-container');
function createCategory() {
    branches.forEach(function (category) {
        let link = category.label.replace(" ", "-");
        categoryContainer.insertAdjacentHTML('beforeend', `
            <div class="catregory">
                <a href="grouping.html?type-grouping=${link}">
                    <p class="icon"><iconify-icon icon="${category.icon}"></iconify-icon></p>
                    <p class="title">${category.label}</p>
                </a>
            </div>`);
    });
}

//! Filter Posters
let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keydown', function (e) {
    if (e.keyCode == 13) {
        findSearch();
    }
});

function findSearch() {
    let valueSearchBox = searchInput.value;
    let resultSreach = posters.filter(function (info) {
        return info.title.includes(valueSearchBox);
    });
    postersContainer.innerHTML = "";
    searchInput.value = "";
    createPosterElem(resultSreach);
}

// باید تو میکسین نوشته شه چون جایه دیگم استفاده شده
const postersContainer = document.querySelector('.posters-container');
function createPosterElem(posterss) {
    posterss.forEach(function (poster) {
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
}
createCategory();
createPosterElem(posters);
//! Get Posters
// function getPosters() {
//     fetch("https://divardb-dd709-default-rtdb.firebaseio.com/posters.json")
//         .then(res => res.json())
//         .then(data => {
//             let posterInfo = Object.entries(data)
//             posterInfo.forEach(function (poster) {
//                 postersContainer.insertAdjacentHTML('afterbegin', `
//                     <div class="poster">
//                         <a href="showPoster.html?id=${poster[1].id}">
//                             <div class="specifications">
//                                 <p class="title-poster">${poster[1].title}</p>
//                                 <div>
//                                     <p class="price">${poster[1].price}</p>
//                                     <p class="date">1 ساعت پیش</p>
//                                 </div>
//                             </div>
//                             <div class="image-poster">
//                                 <img src="image/image.png" />
//                             </div>
//                         </a>
//                     </div>`);
//             });
//         })
// }
// getPosters();

//! Create Posters
// function createPoster() {
//     let posterInfo = {
//         mainImageSrc: '',
//         mainBranche: 'کالای دیجیتال',
//         branche: 'موبایل',
//         image: ['asdasd', 'asdasdasd', 'asdasd'],
//         title: 'موبایل',
//         description: 'با سلام موبایل عالی است',
//         location: 'نیشابور',
//         price: 15000000,
//         // specification: [
//         //     { title: 'وضعیت', value: 'نو' },
//         //     { title: 'اصالت برند', value: 'اصل' },
//         //     { title: 'تعداد سیم کارت', value: '2 عدد' },
//         //     { title: 'حافظه داخلی', value: '256 گیگابایت' },
//         //     { title: 'مقدار رم', value: '8 گیگابایت' },
//         //     { title: 'قیمت', value: 150000000 },
//         // ]
//     }
//     fetch("https://divardb-dd709-default-rtdb.firebaseio.com/posters.json", {
//         method: 'POST',
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(posterInfo)
//     });
// }