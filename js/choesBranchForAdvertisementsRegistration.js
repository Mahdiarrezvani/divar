import { branches } from './DataBase.js';
let branchsContainer = document.querySelector('.branchs-container');
branches.forEach(function (info) {
    branchsContainer.insertAdjacentHTML("beforeend", `
        <div class="type branche" type="${info.label}">
            <div class="branche" type="${info.label}"><i class="${info.icon} branche" type="${info.label}">@@</i><span class="branche" type="${info.label}">${info.label}</span></div>
            <span class="branche" type="${info.label}">></span>
        </div>
    `);
});
let andisNumberBranche = -1;
window.addEventListener('click', function (elem) {
    let brancheChoosed = elem.target.attributes.type;
    if (elem.target.attributes.type && elem.target.attributes.class) {
        // ! if
        if (elem.target.attributes.class.nodeValue.includes('branche')) {
            findBranche(brancheChoosed.nodeValue, "sebsetAdvertisements", branches);
        } else {
            findBranche(brancheChoosed.nodeValue, "subsetSubset", branches[andisNumberBranche].sebsetAdvertisements);
        }
        // ! End if
    }
});

function findBranche(brancheChoosed, type, branche) {
    andisNumberBranche = -1;
    let findedBranche = branche.find(function (info) {
        andisNumberBranche++;
        return info.label == brancheChoosed;
    });
    branchsContainer.innerHTML = "";
    if (findedBranche) {
        createGrouping(findedBranche, type, brancheChoosed);
    } else {
        let branche = brancheChoosed.replaceAll(' ', '-');
        location.assign(`advertisementsRegistration.html?branche=${branche}`);
    }
}
function createGrouping(findedBranche, type, brancheChoosed) {
    console.log(brancheChoosed);
    if (findedBranche[type]) {
        let isSubset = '';
        findedBranche[type].forEach(function (info) {
            //
            let text = "";
            type == "sebsetAdvertisements" ? text = info.label : text = info;
            info.subsetSubset ? isSubset = '<span>></span>' : isSubset = '';
            //
            branchsContainer.insertAdjacentHTML("beforeend", `
            <div class="type subsetSubset" type="${text}">
                <div class="subsetSubset" type="${text}">
                    <i class="${info.icon} subsetSubset" type="${text}">@@</i>
                    <span class="subsetSubset" type="${text}">${text}</span>
                </div>
                ${isSubset}
            </div>`);
        });
    } else {
        let branche = brancheChoosed.replaceAll(' ', '-');
        location.assign(`advertisementsRegistration.html?branche=${branche}`);
    }
}








// let branchsContainer = document.querySelector('.branchs-container');
// import { createGrouping, findBranchesChosen, findSubsetBranchesChosen } from "./mixins.js"
// let type = new URLSearchParams(location.search);
// let getMainGrouping = type.get('type-grouping');
// let getSubset = type.get('sub-set');
// createGrouping("choesBranchForAdvertisementsRegistration.html", branchsContainer);
// //
// if (getMainGrouping) {
//     findBranchesChosen(getMainGrouping, branchsContainer, "advertisementsRegistration.html");
// }
// if (getMainGrouping && getSubset) {
//     findSubsetBranchesChosen(branchsContainer, getMainGrouping, getSubset, "advertisementsRegistration.html");
// }