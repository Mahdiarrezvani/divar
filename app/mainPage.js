let categorys = [
    { title: 'املاک', icon: '<img src="" />' },
    { title: 'وسایل نقلیه', icon: '<img src="" />' },
    { title: 'کالای دیجیتال', icon: '<img src="" />' },
    { title: 'خانه و آشپزخانه', icon: '<img src="" />' },
    { title: 'خدمات', icon: '<img src="" />' },
    { title: 'وسایل شخصی', icon: '<img src="" />' },
    { title: 'سرگرمی و فراغت', icon: '<img src="" />' },
    { title: 'اجتماعی', icon: '<img src="" />' },
    { title: 'تجهیزات و صنعتی', icon: '<img src="" />' },
    { title: 'استخدام و کاریابی', icon: '<img src="" />' },
];
let infoProducts = [
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو',
        price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو', price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو',
        price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو', price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو',
        price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو', price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو',
        price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو', price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو',
        price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو', price: 15000000
    },
    {
        mainImageSrc:'',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو',
        price: 15000000
    },
    {
        mainImageSrc: '',
        image: ['asdasd', 'asdasdasd', 'asdasd'],
        title: 'موبایل',
        description: 'با سلام موبایل عالی است',
        location: 'نیشابور',
        productType: 'کالای دیجیتال',
        status: 'نو', price: 15000000
    },
];
const categoryContainer = document.querySelector('.catregory-container');
const productContainer = document.querySelector('.product-container');
// const locationBtn = document.querySelector('.location-btn');
categorys.forEach(function (category) {
    categoryContainer.insertAdjacentHTML('beforeend', `
    <div class="catregory">
        ${category.icon}
        <p class="title">${category.title}</p>
    </div>
    `)
});
infoProducts.forEach(function (product) {
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
</div>
    `);
})
// function getProduct() {
//     fetch('https://divardatabase-default-rtdb.firebaseio.com/product.json')
//         .then(data => data.json())
//         .then(data => {
//             let productsData = Object.entries(data)
//             console.log(productsData);
//             // productsData.forEach(function (product) {
//             //     console.log(product);
//             // })
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