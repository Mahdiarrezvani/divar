import { specifications } from "./DataBase.js";
let params = new URLSearchParams(location.search);
let getBranch = params.get('branche');
let branche = getBranch.replaceAll('-', ' ');
// 
let container = document.querySelector('.container');
function findBranche() {
    let brancheFinded = specifications.find(function (info) {
        return info.branche == branche;
    });
    showPage(brancheFinded)
}
findBranche();
function showPage(brancheFinded) {
    console.log(brancheFinded.isShowImage);
    if (brancheFinded.isShowImage) {
        container.insertAdjacentHTML('beforeend', `
        
        `);
    } else { }
}