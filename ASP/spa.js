// import router from "./router.js"
// document.addEventListener('click', function (event) {
//     if (!event.target.className.includes('link')) {
//         return false;
//     }
//     event.preventDefault();
//     UrlRoutes(event);
// })
// function UrlRoutes(event) {
//     window.history.pushState({}, "", event.target.href)
//     locationHandler();
// }
// async function locationHandler() {
//     const location = window.location.pathname;
//     const route = router[location];
//     const html = await fetch(route.template).then(res => res.text());
//     document.querySelector('.container').innerHTML = html;
// }