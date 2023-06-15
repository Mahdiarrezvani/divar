import { branches, advertisements } from './mixins.js';
const categoryContainer = document.querySelector('.catregory-container');
const productContainer = document.querySelector('.product-container');
branches.forEach(function (category) {
    categoryContainer.insertAdjacentHTML('beforeend', `
        <div class="catregory">
            <img src="" />
            <p class="title">${category.label}</p>
        </div>`);
});
advertisements.forEach(function (product) {
    productContainer.insertAdjacentHTML('afterbegin', `
        <div class="product">
            <div class="specifications">
                <p class="title-product">${product.title}</p>
                <div>
                    <p class="price">${product.price}</p>
                    <p class="date">asdas</p>
                </div>
            </div>
            <div class="image-product">
                <img src="${product.mainImageSrc}" />
            </div>
        </div>`);
});
// function getProduct() {
//     fetch('https://divardatabase-default-rtdb.firebaseio.com/product.json')
//         .then(data => data.json())
//         .then(data => {
//             let productsData = Object.entries(data)
//             console.log(productsData);
//         })
//         .catch(err => console.log(err))
// }
// function addProductToPage(){}
// function setProduct() {
//     let info = {}
//     fetch('https://divardatabase-default-rtdb.firebaseio.com/product.json', {
//         method: "POST",
//         headers: {
//             'Content-Type': 'Application/json'
//         },
//         body: JSON.stringify(info)
//     })
//         .then(res => console.log(res))
//         .catch(err => console.log(err))
// }
// setProduct()
// getProduct()